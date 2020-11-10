import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExaminationRoutingModule} from "./examination-routing.module";
import { ExamListComponent } from './exam-list/exam-list.component';
import { DoExamComponent } from './do-exam/do-exam.component';
import {MatTabsModule} from "@angular/material/tabs";
import {SharedModule} from "../../shared/shared.module";
import {HomeComponent} from "./home/home.component";


@NgModule({
    declarations: [
        HomeComponent,
        ExamListComponent,
        DoExamComponent],
    imports: [
        ExaminationRoutingModule,
        MatTabsModule,
        CommonModule,
        SharedModule,
    ]
})
export class ExaminationModule {
}
