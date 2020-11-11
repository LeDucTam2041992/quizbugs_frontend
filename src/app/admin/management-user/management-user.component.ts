import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
    selector: 'app-management-user',
    templateUrl: './management-user.component.html',
    styleUrls: ['./management-user.component.scss']
})
export class ManagementUserComponent implements OnInit {

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    displayedColumns = ['id', 'username', 'roles', 'option'];
    filteredListExams: MatTableDataSource<any>;
    searchKey: string;


    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.userService.getAllUser().subscribe(list => {
                let array = list.map(item => {
                    return {
                        id: item.id,
                        username: item.username,
                        roles: item.roles
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

    updateRole(id: any) {
        if(confirm("Are you sure want to upgrade")) {
            this.userService.updateRoleAdminUser(id).subscribe(res => {
                    this.getAll()
                }
            )
        }
    }
}
