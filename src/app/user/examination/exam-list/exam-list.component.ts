import {Component, OnInit} from '@angular/core';
import {Exam} from "../../../model/exam";
import {ExamService} from "../../../service/exam.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-exam-list',
    templateUrl: './exam-list.component.html',
    styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {

    listExams: Exam[];
    filteredListExams: Exam[];
    examName: string;

    constructor(private examService: ExamService, private router:Router) {
    }

    ngOnInit(): void {
        this.examService.getAllExams().subscribe(res => {
                this.listExams = res;
                this.filteredListExams = this.listExams.slice(0,5)
            }
        )
    }

    onPageChange($event) {
        this.filteredListExams = this.listExams.slice($event.pageIndex * $event.pageSize, $event.pageIndex * $event.pageSize + $event.pageSize);
    }

    SearchTextBox() {
        this.filteredListExams = this.listExams.filter(element => {
            return element.name.includes(this.examName)
        })
    }

    clear() {
        this.examName = '';
        this.filteredListExams = this.listExams;
    }

    goDetail(id: number) {
        this.router.navigate([`examination/detail/${id}`]);
    }
}
