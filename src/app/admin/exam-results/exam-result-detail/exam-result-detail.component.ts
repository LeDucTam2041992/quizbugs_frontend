import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {UserExam} from "../../../model/user-exam";
import {UserExamService} from "../../../service/user-exam.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-exam-result-detail',
  templateUrl: './exam-result-detail.component.html',
  styleUrls: ['./exam-result-detail.component.scss']
})
export class ExamResultDetailComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  listHistory = new MatTableDataSource<UserExam>([]);
  displayedColumns = ['id', 'test-name','username', 'score', 'date of test', 'action'];
  searchKey: string;
  id=0;
  constructor(private userExamService: UserExamService, private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.listHistory.paginator = this.paginator;
    this.listHistory.sort = this.sort;
    this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.userExamService.getAllUserExamByExamId(this.id).subscribe(data => {
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
        }
    )
  }

  clickDetail(id) {
    console.log(id);
    // this.router.navigate(['/admin/exam-results/history/' + id]);
    this.router.navigate(['/admin/exam-results/history/' + id]);
  }

}
