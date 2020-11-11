import { Component, OnInit } from '@angular/core';
import {Answer} from '../../../model/answer';
import {Question} from '../../../model/question';
import {ICategory} from '../../../model/ICategory';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionService} from '../../../service/question.service';
import {Router} from '@angular/router';
import {CategoryService} from '../../../service/category.service';

@Component({
  selector: 'app-input-question',
  templateUrl: './input-question.component.html',
  styleUrls: ['./input-question.component.scss']
})
export class InputQuestionComponent implements OnInit {
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

  questionForm: FormGroup;
  constructor(private fb: FormBuilder,
              private service: QuestionService,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      answer: ['', Validators.required],
      category: ['', Validators.required]
    });
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }
  submit(): void {
    if (!this.questionForm.invalid) {
      this.question.question = this.questionForm.get('question').value;
      this.answer.answer = this.questionForm.get('answer').value;
      this.question.categories = this.questionForm.get('category').value;
      console.log(this.question);
      this.service.createQuestion(this.question)
          .subscribe(() => {
            this.message = 'Success!';
            // this.router.navigate(['/admin/questions/list']);
          });
    } else {
      this.message = 'UnSuccess!';
    }
  }

  cancel() {
    this.router.navigate(['admin/questions/list'])
  }

}
