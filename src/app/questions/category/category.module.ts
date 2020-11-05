import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialsModule} from "../../materials/materials.module";


const routes: Routes = [
  {
    path: '', component: CategoryListComponent
  },
  {
    path: 'add', component: CategoryAddComponent
  },
  {
    path: ':id/edit', component: CategoryEditComponent
  }
]
@NgModule({
  declarations: [CategoryListComponent, CategoryAddComponent, CategoryEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialsModule
  ]
})
export class CategoryModule { }
