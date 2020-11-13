import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamResultsComponent } from './exam-results.component';
import {MaterialsModule} from "../../materials.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ExamResultsRoutingModule} from "./exam-results-routing.module";
import {ExamResultDetailComponent} from "./exam-result-detail/exam-result-detail.component";
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [ExamResultsComponent,ExamResultDetailComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    ExamResultsRoutingModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ]
})
export class ExamResultsModule { }
