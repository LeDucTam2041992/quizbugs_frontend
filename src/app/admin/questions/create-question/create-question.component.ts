import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Answer} from '../../../model/answer';
import {QuestionService} from '../../../service/question.service';
import {Router} from '@angular/router';
import {Question} from '../../../model/question';
import {ICategory} from '../../../model/ICategory';
import {CategoryService} from '../../../service/category.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  answer1: Answer = {
    id: 0,
    answer: '',
    status: false
  };
  answer2: Answer = {
    id: 0,
    answer: '',
    status: false
  };
  answer3: Answer = {
    id: 0,
    answer: '',
    status: false
  };
  answer4: Answer = {
    id: 0,
    answer: '',
    status: false
  };
  typeCheckBox = 1;
  typeSelect = 0;

  question: Question = {
    id: 0,
    question: '',
    type: -1,
    status: 1,
    // @ts-ignore
    category: {},
    answers: [this.answer1, this.answer2, this.answer3, this.answer4]
  };
  categories: ICategory[];
  count = 0;
  message = '';

  questionForm: FormGroup;
  constructor(private fb: FormBuilder,
              private service: QuestionService,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
      category: ['', Validators.required]
    });
    this.categoryService.getAllCategories().subscribe(res => {
      this.categories = res;
    });
  }
  submit(): void {
    if (!this.questionForm.invalid) {
      this.question.question = this.questionForm.get('question').value;
      this.answer1.answer = this.questionForm.get('answer1').value;
      this.answer2.answer = this.questionForm.get('answer2').value;
      this.answer3.answer = this.questionForm.get('answer3').value;
      this.answer4.answer = this.questionForm.get('answer4').value;
      this.question.category = this.questionForm.get('category').value;
      if (this.answer1.status) {
        this.count++;
      }
      if (this.answer2.status) {
        this.count++;
      }
      if (this.answer3.status) {
        this.count++;
      }
      if (this.answer4.status) {
        this.count++;
      }
      if (this.count >= 2){
        this.question.type = this.typeCheckBox;
      } else {
        this.question.type = this.typeSelect;
      }
      console.log(this.question);
      this.count = 0;
      this.service.createQuestion(this.question)
        .subscribe(() => {
          this.message = 'Success!';
          this.router.navigate(['/exam-history/list']);
        });
    } else {
      this.message = 'UnSuccess!';
      this.count = 0;
    }
  }

  selectedA(): void{
    this.answer1.status = !this.answer1.status;
  }
  selectedB(): void{
    this.answer2.status = !this.answer2.status;
  }
  selectedC(): void{
    this.answer3.status = !this.answer3.status;
  }
  selectedD(): void{
    this.answer4.status = !this.answer4.status;
  }
  cancel() {
    this.router.navigate(['exam-history/list'])
  }
}
