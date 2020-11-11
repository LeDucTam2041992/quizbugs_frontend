import {Component, OnInit, ViewChild} from '@angular/core';
import {Exam} from "../../../model/exam";
import {ExamService} from "../../../service/exam.service";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'app-exam-list',
    templateUrl: './exam-list.component.html',
    styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['id', 'name', 'option'];
    filteredListExams: MatTableDataSource<any>;
    searchKey: string;


    constructor(private examService: ExamService, private router: Router) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.examService.getAllExams().subscribe(list => {
                let array = list.map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        enabled: item.enabled,
                        questionSet: item.questionSet
                    }
                });
                this.filteredListExams = new MatTableDataSource(array);
                this.filteredListExams.paginator = this.paginator;
                this.filteredListExams.sort = this.sort;
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
    goDetail(id) {
        this.router.navigate([`user/examination/detail/${id}`]).then(r => r);
    }

}
