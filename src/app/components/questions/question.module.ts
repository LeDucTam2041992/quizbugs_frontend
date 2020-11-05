import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListQuestionComponent } from './list-question/list-question.component';
import {MaterialsModule} from "../../materials.module";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../../app-routing.module";
import {CategoryModule} from "../category/category.module";



@NgModule({
  declarations: [ListQuestionComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    AppRoutingModule,
    CategoryModule
  ]
})
export class QuestionModule { }
