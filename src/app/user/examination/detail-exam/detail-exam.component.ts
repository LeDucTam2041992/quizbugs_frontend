import {Component, Input, OnInit} from '@angular/core';
import {ExamService} from "../../../service/exam.service";
import {Exam} from "../../../model/exam";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
    selector: 'app-detail-exam',
    templateUrl: './detail-exam.component.html',
    styleUrls: ['./detail-exam.component.scss']
})
export class DetailExamComponent implements OnInit {

    @Input()
    inId: number;
    currentExam: Exam;
    id: number;

    constructor(private examService: ExamService, private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        console.log("exam detail now ============")
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap)=> {
            this.id = +paramMap.get('id');
            if (this.id > 0) {
                this.examService.getExamById(this.id).subscribe(res => {
                    this.currentExam = res;
                });
            }
        });
        if (this.inId > 0)
                this.examService.getExamById(this.inId).subscribe(res => this.currentExam = res);
    }

}
