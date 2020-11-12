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
  inQ: Question;
  @Input()
  index: number;
  @Input()
  isCreateQuiz: boolean;
  @Input()
  isQuestionQuiz: boolean;
  @Input()
  isListQuestion: boolean;
  @Output()
  deleteId = new EventEmitter<any>();
  @Output()
  addId = new EventEmitter<any>();
  @Output()
  removeId = new EventEmitter<any>();

  question: Question = {
    id: 1,
    question: '',
    type: 1,
    enabled: true,
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
    this.question = this.inQ;
  }

  editQuestionType4Answer(id: number) {
    this.router.navigate(['admin/questions/edit/'+id])
  }

  delete(id: any) {
      this.deleteId.emit(id);
    }

  editTrueFalseQuestion(id: number) {
    this.router.navigate(['admin/questions/edits/'+id])
  }

  editInputQuestion(id: number) {
      this.router.navigate(['admin/questions/editi/'+id])
  }

  addQuiz(id: number) {
    this.addId.emit(id);
  }

  removeQuiz(id: number) {
    this.removeId.emit(id);
  }

}
