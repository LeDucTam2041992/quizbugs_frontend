import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Exam} from "../../model/exam";
import {UserExamService} from "../../service/user-exam.service";
import {ExamService} from "../../service/exam.service";

@Component({
    selector: 'app-exam-results',
    templateUrl: './exam-results.component.html',
    styleUrls: ['./exam-results.component.scss']
})
export class ExamResultsComponent implements OnInit {


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['id', 'exam-name', 'valid', 'times'];
    filteredListExams = new MatTableDataSource<any>([]);
    searchKey: string;


    constructor(public userExamService: UserExamService,
                private examService: ExamService) {
    }

    ngOnInit(): void {
        this.getAll();
        this.filteredListExams.paginator = this.paginator;
        this.filteredListExams.sort = this.sort;
    }

    getAll() {
        this.examService.getAllExams().subscribe((list: Exam[]) => {
                let array = list.map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        enabled: item.enabled,
                        times: 0
                    }
                });
                for (let i in array) {
                    this.userExamService.getAllUserExamByExamId(array[i].id).subscribe(e => {
                            array[i].times = e.length
                        }
                    )
                    this.filteredListExams.data = array;
                }
            }
        )
    }

    onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
    }

    applyFilter() {
        this.filteredListExams.filter = this.searchKey.trim().toLowerCase();
    }

}
