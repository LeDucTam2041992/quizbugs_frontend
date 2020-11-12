import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../service/user.service";
import {Exam} from "../../model/exam";
import {IUser} from "../../model/IUser";

@Component({
    selector: 'app-management-user',
    templateUrl: './management-user.component.html',
    styleUrls: ['./management-user.component.scss']
})
export class ManagementUserComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['id', 'username', 'roles', 'option', 'history'];
    filteredListUsers = new MatTableDataSource<IUser>([]);
    searchKey: string;


    constructor(private userService: UserService, private router: Router) {
    }

    ngOnInit(): void {
        this.getAll();
        this.filteredListUsers.paginator = this.paginator;
        this.filteredListUsers.sort = this.sort;
    }

    getAll() {
        this.userService.getAllUser().subscribe((list: IUser[]) => {
                this.filteredListUsers.data = list;
            }
        )
    }

    onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
    }

    applyFilter() {
        this.filteredListUsers.filter = this.searchKey.trim().toLowerCase();
    }

    updateRole(id: any) {
        if(confirm("Are you sure want to upgrade")) {
            this.userService.updateRoleAdminUser(id).subscribe(res => {
                },
                () => {},
                () => this.getAll()
            )
            this.getAll();
        }
    }

    goHistoryExam(id: any) {
        this.router.navigate([`history/list/${id}`]);
    }
}
