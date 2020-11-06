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
    });
  }
}

