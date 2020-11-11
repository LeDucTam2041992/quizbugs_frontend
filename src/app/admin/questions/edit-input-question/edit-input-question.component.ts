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
  selector: 'app-edit-input-question',
  templateUrl: './edit-input-question.component.html',
  styleUrls: ['./edit-input-question.component.scss']
})
export class EditInputQuestionComponent implements OnInit {
  answer: Answer = {
    id: 0,
    answer: '',
    status: true
  };

  question: Question = {
    id: 0,
    question: '',
    type: 3,
    enabled: true,
    categories: [],
    answers: [this.answer]
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
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.question = this.getQuestion(this.id);
    });
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
      category: ['', Validators.required]
    });
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }
  getQuestion(id: number): any {
    this.service.getQuestion(id).subscribe(qs => {
      this.question = qs;
      this.answer = this.question.answers[0];
      this.questionForm = this.fb.group({
        question: [this.question.question, Validators.required],
        answer: [this.answer.answer, Validators.required],
        category: [this.question.categories, Validators.required]
      });
    });
  }
  submit(): void {
    if (!this.questionForm.invalid) {
      this.question.question = this.questionForm.get('question').value;
      this.answer.answer = this.questionForm.get('answer').value;
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
