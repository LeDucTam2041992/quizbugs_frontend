import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Question} from '../../question';
import {Answer} from '../../answer';

export class Category {
  id: number;
  category: string;
}
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
    type: this.typeSelect,
    status: 1,
    category: Category,
    answers: []
  };
  categories: Category[];
  checkedA = false;
  checkedB = false;
  checkedC = false;
  checkedD = false;
  count = 0;

  questionForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      question: ['', Validators.required],
      answer1: ['', Validators.required],
      answer2: ['', Validators.required],
      answer3: ['', Validators.required],
      answer4: ['', Validators.required],
      category: Category
    });
    this.categories = [
      {id: 1, category: 'Java'},
      {id: 1, category: 'PHP'},
      {id: 1, category: 'SQL'}
      ];
  }
  submit(): void {
    if (!this.questionForm.invalid) {
      this.question.question = this.questionForm.get('question').value;
      this.answer1.answer = this.questionForm.get('answer1').value;
      this.answer1.status = this.checkedA;
      this.answer2.answer = this.questionForm.get('answer2').value;
      this.answer2.status = this.checkedB;
      this.answer3.answer = this.questionForm.get('answer3').value;
      this.answer3.status = this.checkedC;
      this.answer4.answer = this.questionForm.get('answer4').value;
      this.answer4.status = this.checkedD;
      this.question.category = this.questionForm.get('category').value;
      this.question.answers.push(this.answer1);
      this.question.answers.push(this.answer2);
      this.question.answers.push(this.answer3);
      this.question.answers.push(this.answer4);
      if (this.checkedA) {
        this.count++;
      }
      if (this.checkedB) {
        this.count++;
      }
      if (this.checkedC) {
        this.count++;
      }
      if (this.checkedD) {
        this.count++;
      }
      if (this.count > 1){
        this.question.type = this.typeCheckBox;
      }
      console.log(this.question);
      this.count = 0;
      this.question.answers = [];
    } else {
      console.log('Khong thanh cong');
      this.count = 0;
    }
  }

  selectedA(): void{
    this.checkedA = !this.checkedA;
  }
  selectedB(): void{
    this.checkedB = !this.checkedB;
  }
  selectedC(): void{
    this.checkedC = !this.checkedC;
  }
  selectedD(): void{
    this.checkedD = !this.checkedD;
  }
}
