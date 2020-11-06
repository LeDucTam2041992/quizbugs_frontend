import { Component, OnInit } from '@angular/core';
import {Answer} from '../../../answer';
import {Question} from '../../../question';
import {Category} from '../create-question/create-question.component';
import {Subscription} from 'rxjs';
import {QuestionService} from '../../../service/question.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.css']
})
export class DetailQuestionComponent implements OnInit {

  res = 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inuwas originally bred for hunting.';
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
    question: 'ABC',
    type: 0,
    status: 0,
    category: Category,
    answers: []
  };
  categories: Category[];
  count = 0;
  message = '';
  sub: Subscription;
  id: number;
  constructor(private service: QuestionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getQuestion(16);
    });
  }
  getQuestion(id: number): void {
    this.service.getQuestion(id).subscribe(res => {
      this.question = res;
      this.answer1 = this.question.answers[0];
      this.answer2 = this.question.answers[1];
      this.answer3 = this.question.answers[2];
      this.answer4 = this.question.answers[3];
    });
  }
}

