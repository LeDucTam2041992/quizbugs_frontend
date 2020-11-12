import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeQuizComponent} from './home-quiz/home-quiz.component';
import {CreateQuizComponent} from './create-quiz/create-quiz.component';
import {ListQuestionComponent} from '../questions/list-question/list-question.component';
import {DetailQuizComponent} from './detail-quiz/detail-quiz.component';
import {ListQuizComponent} from './list-quiz/list-quiz.component';


const routes: Routes = [
  {
    path: '',
    component: HomeQuizComponent,
    children: [
      {
        path: 'list', component: ListQuizComponent
      },
      {
        path: 'create', component: CreateQuizComponent
      },
      {
        path: ':id', component: DetailQuizComponent
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
export class QuizRoutingModule { }
