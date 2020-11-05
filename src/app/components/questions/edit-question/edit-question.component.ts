import { Component, OnInit } from '@angular/core';
import {Answer} from '../../../answer';
import {Question} from '../../../model/question';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {QuestionService} from '../../../service/question.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Category} from '../create-question/create-question.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  answer1: Answer;
  answer2: Answer;
  answer3: Answer;
  answer4: Answer;
  typeCheckBox = 1;
  typeSelect = 0;
  question: Question;
  categories: Category[];
  count = 0;
  message = '';
  sub: Subscription;
  id: number;
  questionForm: FormGroup;

  constructor(private fb: FormBuilder,
              private service: QuestionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getQuestion(16);
    });
    this.categories = [
      {id: 1, category: 'Java'},
      {id: 2, category: 'PHP'},
      {id: 3, category: 'SQL'}
    ];
  }
  getQuestion(id: number): void {
    this.service.getQuestion(id).subscribe(qs => {
      this.question = qs;
      console.log(this.question);
      this.answer1 = this.question.answers[0];
      this.answer2 = this.question.answers[1];
      this.answer3 = this.question.answers[2];
      this.answer4 = this.question.answers[3];
      this.questionForm = this.fb.group({
        question: [this.question.question, Validators.required],
        answer1: [this.answer1.answer, Validators.required],
        answer2: [this.answer1.answer, Validators.required],
        answer3: [this.answer1.answer, Validators.required],
        answer4: [this.answer1.answer, Validators.required],
        category: [Category, Validators.required]
      });
      console.log(this.questionForm.value);
    });
    // this.question = {
    //   id: 1,
    //   question: 'Test Edit',
    //   type: 1,
    //   status: 1,
    //   category: {
    //     id: 1,
    //     category: 'Java'
    //   },
    //   answers: [
    //     {
    //       id: 10,
    //       answer: 'Test Edit',
    //       status: false
    //     },
    //     {
    //       id: 11,
    //       answer: 'Test Edit',
    //       status: false
    //     },
    //     {
    //       id: 12,
    //       answer: 'Test Edit',
    //       status: true
    //     },
    //     {
    //       id: 13,
    //       answer: 'Test Edit',
    //       status: true
    //     }
    //   ]
    // };
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
      this.message = 'Success!';
      this.count = 0;
      // this.service.updateQuestion(this.question.id, this.question)
      //   .subscribe(() => {
          // this.router.navigate(['/']);
        // });
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
}
