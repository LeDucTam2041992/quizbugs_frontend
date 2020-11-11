import { Component, OnInit } from '@angular/core';
import {Answer} from '../../../model/answer';
import {Question} from '../../../model/question';
import {ICategory} from '../../../model/ICategory';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionService} from '../../../service/question.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CategoryService} from '../../../service/category.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-true-false-question',
  templateUrl: './edit-true-false-question.component.html',
  styleUrls: ['./edit-true-false-question.component.scss']
})
export class EditTrueFalseQuestionComponent implements OnInit {
  trueA: Answer = {
    id: 0,
    answer: 'True',
    status: true
  };
  falseA: Answer = {
    id: 0,
    answer: 'False',
    status: false
  };
  question: Question = {
    id: 0,
    question: '',
    type: 2,
    enabled: true,
    categories: [{
      id:1,
      category:'Java',
      enabled:true
    }],
    answers: [this.trueA, this.falseA]
  };
  categories: ICategory[];
  message = '';
  sub: Subscription;
  id: number;

  questionForm: FormGroup;

  constructor(private fb: FormBuilder,
              private service: QuestionService,
              private router: Router,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
      category: ['', Validators.required]
    });

    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    });

    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.question = this.getQuestion(this.id);
    });
  }
  getQuestion(id: number): any {
    this.service.getQuestion(id).subscribe(qs => {
      this.question = qs;
      this.trueA = this.question.answers[0];
      this.falseA = this.question.answers[1];
      this.questionForm = this.fb.group({
        question: [this.question.question, Validators.required],
        answer: [this.question.answers, Validators.required],
        category: [this.question.categories, Validators.required]
      });
    });
  }

  submit(): void {
    if (!this.questionForm.invalid) {
      this.question.question = this.questionForm.get('question').value;
      if(this.questionForm.get('answer').value.answer == 'False') {
        this.trueA.status = false;
        this.falseA.status = true;
      };
      this.question.categories = this.questionForm.get('category').value;
      console.log(this.question);
      this.service.updateQuestion(this.question.id, this.question)
          .subscribe(() => {
            // this.router.navigate(['admin/questions/list']);
            this.message = 'Success!';
          });
    } else {
      this.message = 'UnSuccess!';
    }
  }
  cancel() {
    this.router.navigate(['admin/questions/list'])
  }

}
