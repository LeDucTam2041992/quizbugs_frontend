import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExamListComponent} from "./exam-list/exam-list.component";
import {HomeComponent} from "./home/home.component";
import {DoExamComponent} from "./do-exam/do-exam.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list', component: ExamListComponent,
      },
      {
        path: 'detail/:id', component: DoExamComponent,
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
