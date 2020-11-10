import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../../model/question';
import {FormBuilder} from '@angular/forms';
import {QuestionService} from '../../../service/question.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-detail-question',
  templateUrl: './detail-question.component.html',
  styleUrls: ['./detail-question.component.css']
})
export class DetailQuestionComponent implements OnInit {
  @Input()
  inId: number;
  @Input()
  index: number;

  @Output()
  deleteId = new EventEmitter<any>();

  question: Question = {
    id: 1,
    question: '',
    type: 1,
    status: 1,
    categories: [],
    answers: []
  };

  sub: Subscription;
  id = 0;
  constructor(private fb: FormBuilder,
              private questionService: QuestionService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.paramMap.subscribe(paramMap => {
      this.id = +paramMap.get('id');
      if (this.id > 0) {
        this.questionService.getQuestion(this.id).subscribe(res => {
          this.question = res;
        });
      }
    });
    if (this.inId > 0) {
      this.questionService.getQuestion(this.inId).subscribe(res =>
        this.question = res
      );
    }
  }

  editQuestionType4Answer(id: number) {
    this.router.navigate(['questions/edit/'+id])
  }

  delete(id: any) {
      this.deleteId.emit(id);
    }

  editTrueFalseQuestion(id: number) {
    this.router.navigate(['questions/edits/'+id])
  }

  editInputQuestion(id: number) {
      this.router.navigate(['questions/editi/'+id])
  }
}
