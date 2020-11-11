import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";
import {UserExamService} from "../../../service/user-exam.service";

@Component({
    selector: 'app-history-list',
    templateUrl: './history-list.component.html',
    styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    listHistory: MatTableDataSource<any>;
    displayedColumns = ['id', 'test-name', 'score', 'date of test','action'];
    searchKey: string;

    constructor(private userExamService: UserExamService, private router: Router) {
    }

    ngOnInit(): void {
        this.getAll()
    }

    onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
    }

    applyFilter() {
        this.listHistory.filter = this.searchKey.trim().toLowerCase();
    }

    getAll() {
        this.userExamService.getAllExamOfUser().subscribe(list => {
                let array = list.map(item => {
                    return {
                        id: item.id,
                        user: item.user,
                        exam: item.exam,
                        date: new Date(item.date),
                        mark: item.mark,
                        userAnswers: item.userAnswers,
                    }
                });
                console.log(array);
                this.listHistory = new MatTableDataSource(array);
                this.listHistory.paginator = this.paginator;
                this.listHistory.sort = this.sort;
            }
        )
    }

    clickDetail(id) {
        if (confirm('Are you sure want to delete?')) {
            this.userExamService.getUserExamById(id).subscribe(res => {
                this.getAll();
            })
        }
    }


}
