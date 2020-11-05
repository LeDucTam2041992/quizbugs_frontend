import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CategoryService} from "../../../service/category.service";
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
  listCategory: ICategory[];
  listCategories: MatTableDataSource<ICategory>;
  displayedColumns: string[];

  fil

  constructor(private categoryService: CategoryService
  ) {
  }

  ngAfterViewInit(): void {
    this.listCategories.paginator = this.paginator;
    this.listCategories.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue: any = (event.target as HTMLInputElement).value.trim().toLowerCase().toString();
    // @ts-ignore
    // console.log(this.listCategories);
    // this.listCategory.filter(obj =>
    //   obj.category.toString().includes(filterValue));

    // this.listCategories.filter(filterValue);
    //   this.listCategories = this.listCategory;
    this.categoryService.getAllCategories().subscribe(
      res => {

          // console.log(res.)
        }
    );
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
    // this.listCategories = new MatTableDataSource<ICategorany>(this.listCategory)
  }

  getAll() {
    this.categoryService.getAllCategories().subscribe(res => {
        this.listCategory = res;
        this.listCategories = res;
        // console.log(this.listCategory)
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
