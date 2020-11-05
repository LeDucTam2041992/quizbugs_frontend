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
export class CategoryListComponent implements OnInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<ICategory>;
  listCategory: ICategory[];
  listCategories: MatTableDataSource<any>;
  displayedColumns = ['id', 'category', 'option'];
  searchKey: string;

  constructor(private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
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
        // console.log(this.listCategory)
      }
    )
    // @ts-ignore
    // this.dataSource = new MatTableDataSource<ICategory>(this.listCategory);
    // this.listCategories = new MatTableDataSource<ICategorany>(this.listCategory)

  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.listCategories.filter = this.searchKey.trim().toLowerCase();
  }
  delete(id) {
    if (confirm('Are you sure want to delete?')) {
      this.categoryService.delete(id).subscribe(res => {
        if (res.status == 'success') {
          // this.getAll();
          console.log(res.message);
        }
      })
    }
  }

}
