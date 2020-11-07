import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  newCategoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private categoryService: CategoryService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.newCategoryForm = this.formBuilder.group({
      category: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }
  onSubmit() {
    let data = this.newCategoryForm.value;
    this.categoryService.createCategory(data).subscribe(e => {
      console.log("create " + e);
    });
    this.route.navigate(['categories/list']);
  }

  cancel() {
    this.route.navigate(['categories/list']);
  }
}
