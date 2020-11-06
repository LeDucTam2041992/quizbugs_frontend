import {Component, Input, OnInit} from '@angular/core';
import {Question} from "../../../model/question";
import {ICategory} from "../../../model/ICategory";
import {FormBuilder, FormGroup} from "@angular/forms";
import {QuestionService} from "../../../service/question.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.css']
})
export class DetailQuestionComponent implements OnInit {
  @Input()
  inId: number;

  question: Question = {
    id: 1,
    question: '',
    type: 1,
    status: 1,
    category: {
      id: 1,
      category: "java"
    },
    answers: []
  };


  sub: Subscription;
  id: number = 0;
  constructor(private fb: FormBuilder,
              private questionService: QuestionService,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) { }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe( paramMap => {
      this.id = +paramMap.get('id');
      this.questionService.getQuestion(this.id).subscribe(res =>{
        this.question = res;
      })
    })
    if(this.inId>0) {
      this.questionService.getQuestion(this.inId).subscribe( res =>
        this.question = res
      );
    }
  }

}
