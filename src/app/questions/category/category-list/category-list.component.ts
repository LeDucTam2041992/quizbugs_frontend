import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from "../../../services/category.service";
import {ICategory} from "../ICategory";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<ICategory>;
  listCategory: ICategory[] = [];
  listCategories: MatTableDataSource<ICategory>;
  displayedColumns: string[];

  constructor(private categoryService: CategoryService
  ) {
  }

  ngAfterViewInit(): void {
    this.listCategories.paginator = this.paginator;
    this.listCategories.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase().toString();
    this.listCategories.filter = filterValue;
    console.log(this.listCategories)
    // this.categoryService.getAllCategories().subscribe(
    //   res => {
    //     {
    //       this.listCategories = res;
    //       this.listCategories.filteredData = filterValue;
    //     }
    //   }
    // )
    console.log("doing filter " + this.listCategories.data)
    if (this.listCategories.paginator) {
      this.listCategories.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.displayedColumns = ['id', 'category', 'option'];
    this.getAll();
    // @ts-ignore
    // this.dataSource = new MatTableDataSource<ICategory>(this.listCategory);
  }

  getAll() {
    this.categoryService.getAllCategories().subscribe(res => {
        this.listCategory = res;
        this.listCategories = res;
        console.log(this.listCategory)
      }
    )
  }

  delete(id) {
    if (confirm('Are you sure want to delete?')) {
      this.categoryService.delete(id).subscribe(res => {
        if (res.status == 'success') {
          this.getAll();
          console.log(res.message);
        }
      })
    }
  }

}
