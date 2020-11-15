import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../../service/category.service";
import {Router} from "@angular/router";
import {MessageService} from "../../../service/message.service";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  newCategoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private categoryService: CategoryService,
              private route: Router,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.newCategoryForm = this.formBuilder.group({
      category: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }
  onSubmit() {
    let data = this.newCategoryForm.value;
    this.categoryService.createCategory(data).subscribe(
        e => {
      this.messageService.openSnackBar('Category added successfully','CLOSE')
      this.route.navigate(['admin/categories/list'])
    },() => {
      this.messageService.showError('createCategory failed')
        }
    );

  }

  cancel() {
    this.route.navigate(['admin/categories/list']);
  }
}
