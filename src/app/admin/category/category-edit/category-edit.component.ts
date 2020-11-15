import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {ICategory} from "../../../model/ICategory";
import {MessageService} from "../../../service/message.service";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

  updateCategoryForm: FormGroup;


  constructor(private router: ActivatedRoute, private categoryService: CategoryService,
              private formBuilder: FormBuilder, private route: Router,
              private messageService: MessageService) {
  }

  currentCategory: ICategory = {
    id: 1,
    category: 'Java',
    enabled: true
  };
  ngOnInit(): void {
    // tslint:disable-next-line:radix
    const id = Number.parseInt(this.router.snapshot.paramMap.get('id'));
    this.categoryService.findById(id).subscribe(data => {
      this.currentCategory = data;
    });
    this.updateCategoryForm = this.formBuilder.group({
      category: ['', [Validators.required, Validators.maxLength(50)]]
    });
  }

  onSubmit() {
    // @ts-ignore
    this.categoryService.update(this.currentCategory.id, this.currentCategory).subscribe(
        e => {
          this.route.navigate(['admin/categories/list']);
          this.messageService.openSnackBar('Update category success', 'Close');
        },
        ()=> {
          this.messageService.showError('Update false')
        });

  }
  cancel() {
    this.route.navigate(['admin/categories/list']);
  }

}
