import { Component, OnInit } from '@angular/core';
import {ExamService} from "../../../service/exam.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserExamService} from "../../../service/user-exam.service";
import {Exam} from "../../../model/exam";
import {UserExam} from "../../../model/user-exam";
import {UserAnswer} from "../../../model/user-answer";
import {Location} from '@angular/common';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {
  currentExam: Exam;
  userAnswers: UserAnswer[] = [];
  userAnswerIdArr = [];
  userExam: UserExam;


  constructor(private examService: ExamService, private route: Router,
              private router: ActivatedRoute, private fb: FormBuilder,
              private userExamsService: UserExamService,
              private _location: Location) { }

  ngOnInit(): void {
    const id = Number.parseInt(this.router.snapshot.paramMap.get('id'));
    this.userExamsService.getUserExamById(id).subscribe(data => {
      this.userExam = data;
      this.currentExam = data.exam;
      this.userAnswers = data.userAnswers;
      console.log(this.userAnswers);

      for (const answer of this.userAnswers) {
        this.userAnswerIdArr.push(answer.answer.id);
      }

      for (const question of this.currentExam.questionSet) {
      }
      console.log(this.userAnswerIdArr);
    });
  }

  checkInclude(id:any): boolean{
    return this.userAnswerIdArr.includes(id);
  }

  reTest(examId:any):void {
    this.route.navigate([`examination/detail/${examId}`]).then(r => r);
  }

  goBack() {
    this._location.back();
  }
}
