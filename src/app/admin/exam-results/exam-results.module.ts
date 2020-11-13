import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamResultsComponent } from './exam-results.component';
import {MaterialsModule} from "../../materials.module";
import {FormsModule} from "@angular/forms";
import {ExamResultsRoutingModule} from "./exam-results-routing.module";



@NgModule({
  declarations: [ExamResultsComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    ExamResultsRoutingModule
  ]
})
export class ExamResultsModule { }
