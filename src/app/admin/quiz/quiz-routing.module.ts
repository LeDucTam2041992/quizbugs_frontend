import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeQuizComponent} from './home-quiz/home-quiz.component';
import {CreateQuizComponent} from './create-quiz/create-quiz.component';


const routes: Routes = [
  {
    path: '',
    component: HomeQuizComponent,
    children: [
      {
        path: 'create', component: CreateQuizComponent
      },
      // {
      //   path: 'add', component: CreateQuestionComponent
      // },
      // {
      //   path: 'edit/:id', component: EditQuestionComponent
      // },
      {
        path: '**',
        redirectTo: 'create'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
