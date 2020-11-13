import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExamResultsComponent} from "./exam-results.component";
const routes: Routes = [
    {
        path: '',
        component: ExamResultsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamResultsRoutingModule { }
