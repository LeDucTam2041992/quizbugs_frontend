import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExamResultsComponent} from "./exam-results.component";
import {ExamResultDetailComponent} from "./exam-result-detail/exam-result-detail.component";
import {HistoryDetailComponent} from "../../user/exam-history/history-detail/history-detail.component";
const routes: Routes = [
    {
        path: '',
        component: ExamResultsComponent
    },
    {
        path: 'detail/:id',
        component: ExamResultDetailComponent
    },
    {
        path: 'history/:id',
        component: HistoryDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExamResultsRoutingModule { }
