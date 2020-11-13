import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserExamService} from "../../../service/user-exam.service";
import {UserExam} from "../../../model/user-exam";

@Component({
    selector: 'app-history-list',
    templateUrl: './history-list.component.html',
    styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    listHistory = new MatTableDataSource<UserExam>([]);
    displayedColumns = ['id', 'test-name', 'score', 'date of test', 'action'];
    searchKey: string;
    id = 0;

    constructor(private userExamService: UserExamService, private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
            this.id = +paramMap.get('id');
            this.userExamService.getAllExamsOfUserById(this.id).subscribe(data => {
                this.listHistory.data = data;
            });
        });

        if (!this.id)
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
                this.listHistory.data = list;
                this.listHistory.paginator = this.paginator;
                this.listHistory.sort = this.sort;
            }
        )
    }

    clickDetail(id) {
        let lastSlash = this.router.url.lastIndexOf("/");
        let number =+ this.router.url.slice(lastSlash+1);
        if(!isNaN(number)){
            let url = this.router.url.substring(0,lastSlash+1) + `detail/${id}`;
            console.log(url)
            this.router.navigate([url]);
        }else
            this.router.navigate([this.router.url+`/detail/${id}`]).then(r => r);
    }


}
