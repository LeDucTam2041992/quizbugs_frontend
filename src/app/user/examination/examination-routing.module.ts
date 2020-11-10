import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExamListComponent} from "./exam-list/exam-list.component";
import {DoExamComponent} from "./do-exam/do-exam.component";
import {HomeComponent} from "./home/home.component";
import {DetailQuestionComponent} from "../../admin/questions/detail-question/detail-question.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list', component: ExamListComponent,
      },
      {
        path: 'detail/:id', component: DetailQuestionComponent,
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationRoutingModule {}
