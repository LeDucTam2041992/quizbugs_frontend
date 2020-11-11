import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-history-list',
    templateUrl: './history-list.component.html',
    styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    listCategories: MatTableDataSource<any>;
    displayedColumns = ['id', 'category', 'option'];
    searchKey: string;

    constructor(private categoryService: CategoryService, private router: Router) {
    }

    ngOnInit(): void {
        this.getAll()
    }

    onSearchClear() {
        this.searchKey = "";
        this.applyFilter();
    }

    applyFilter() {
        this.listCategories.filter = this.searchKey.trim().toLowerCase();
    }

    getAll() {
        this.categoryService.getAllCategories().subscribe(list => {
                let array = list.map(item => {
                    return {
                        id: item.id,
                        category: item.category
                    }
                });
                this.listCategories = new MatTableDataSource(array);
                this.listCategories.paginator = this.paginator;
                this.listCategories.sort = this.sort;
            }
        )
    }

    delete(id) {
        if (confirm('Are you sure want to delete?')) {
            this.categoryService.delete(id).subscribe(res => {
                this.getAll();
            })
        }
    }

    clickEdit(id) {
        this.router.navigate(['categories/edit/' + id]);
    }

    add() {
        this.router.navigate(['categories/add']);
    }

    cancel() {
        this.router.navigate(['categories/list']);
    }
}
