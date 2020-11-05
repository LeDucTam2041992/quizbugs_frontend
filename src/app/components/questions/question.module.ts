import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListQuestionComponent } from './list-question/list-question.component';
import {MaterialsModule} from "../../materials.module";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../../app-routing.module";
import {CategoryModule} from "../category/category.module";
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "../category/category-list/category-list.component";
import {CategoryAddComponent} from "../category/category-add/category-add.component";
import {CategoryEditComponent} from "../category/category-edit/category-edit.component";


const routes: Routes = [
  {
    path: '', component: ListQuestionComponent
  },
  {
    path: 'add', component: CategoryAddComponent
  },
  {
    path: ':id/edit', component: CategoryEditComponent
  }
]
@NgModule({
  declarations: [ListQuestionComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class QuestionModule { }
