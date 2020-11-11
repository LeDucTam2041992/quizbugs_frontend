import {Component, Input, OnInit} from '@angular/core';
import {ExamService} from "../../../service/exam.service";
import {Exam} from "../../../model/exam";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserExamService} from "../../../service/user-exam.service";
import {UserExam} from "../../../model/user-exam";
import {UserAnswer} from "../../../model/user-answer";

@Component({
    selector: 'app-detail-exam',
    templateUrl: './do-exam.component.html',
    styleUrls: ['./do-exam.component.scss']
})
export class DoExamComponent implements OnInit {

    @Input()
    inId: number;
    currentExam: Exam = {
        id: 1,
        name: 'Java Exam',
        enabled: true,
        questionSet: []
    };
    userAnswersExam: FormGroup;
    answersArrMulti = [];
    answersArr =[];
    userExamObj: UserExam ={};
    listUserAnswer: UserAnswer[] = []

    constructor(private examService: ExamService, private route: Router,
                private router: ActivatedRoute, private fb: FormBuilder,
                private userExamsService: UserExamService) {
    }

    ngOnInit(): void {
        const id = Number.parseInt(this.router.snapshot.paramMap.get('id'));
        this.examService.getExamById(id).subscribe(data => {
            this.currentExam = data;
            this.answersArr = new Array(this.currentExam.questionSet.length);
        });
        if (this.inId > 0)
            this.examService.getExamById(this.inId).subscribe(res => this.currentExam = res);
        this.userAnswersExam = this.fb.group([

        ])
    }

    submit() {
        this.answersArr = this.answersArr.filter(element => element != null);
        for(let i in this.answersArrMulti){
            this.answersArr.push(this.answersArrMulti[i])
        }
        this.answersArr.forEach(element => {
            this.listUserAnswer.push({
                answer: element,
                inputAnswer: ""
            })
        })
        this.userExamObj.userAnswers = this.listUserAnswer;
        this.userExamObj.exam = this.currentExam;
        this.userExamsService.createUserExam(this.userExamObj);
        console.log(this.userExamObj)
    }

    selectAnswers(answer, questionType, index) {
        console.log("answer id " + answer.id)
        if(questionType == 0 || questionType==2) {
            this.answersArr[index] = answer;
        }
        if( questionType == 1) {
            let index = this.answersArrMulti.indexOf(answer);
            if(index>-1){
                this.answersArrMulti.splice(index,1);
            }else  {
                this.answersArrMulti.push(answer);
            }
        }
    }

    cancel() {

    }
}
