import { Component, OnInit } from '@angular/core';
import {ExamService} from "../../../service/exam.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserExamService} from "../../../service/user-exam.service";
import {Exam} from "../../../model/exam";
import {UserExam} from "../../../model/user-exam";
import {UserAnswer} from "../../../model/user-answer";

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit {
  currentExam: Exam = {
    id: 1,
    name: 'Java Exam',
    enabled: true,
    questionSet: []
  };
  answersArrMulti = [];
  answersArr = [];
  userExamObj: UserExam = {};
  listUserAnswer: UserAnswer[] = []

  constructor(private examService: ExamService, private route: Router,
              private router: ActivatedRoute, private fb: FormBuilder,
              private userExamsService: UserExamService) { }

  ngOnInit(): void {
    const id = Number.parseInt(this.router.snapshot.paramMap.get('id'));
    this.userExamsService.getUserExamById(id).subscribe(data => {
      this.currentExam = data.exam;
      this.answersArr = new Array(this.currentExam.questionSet.length);
    });
  }

}
