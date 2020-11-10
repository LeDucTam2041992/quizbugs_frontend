import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListQuestionComponent} from "./list-question/list-question.component";
import {CreateQuestionComponent} from "./create-question/create-question.component";
import {EditQuestionComponent} from "./edit-question/edit-question.component";
import {DetailQuestionComponent} from "./detail-question/detail-question.component";
import {HomeComponent} from "./home/home.component";
import {TrueFalseQuestionComponent} from './true-false-question/true-false-question.component';
import {EditTrueFalseQuestionComponent} from './edit-true-false-question/edit-true-false-question.component';
import {InputQuestionComponent} from './input-question/input-question.component';
import {EditInputQuestionComponent} from './edit-input-question/edit-input-question.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list', component: ListQuestionComponent
      },
      {
        path: 'add', component: CreateQuestionComponent
      },
      {
        path: 'edit/:id', component: EditQuestionComponent
      },
      {
        path: 'edits/:id', component: EditTrueFalseQuestionComponent
      },
      {
        path: 'editi/:id', component: EditInputQuestionComponent
      },
      {
        path: 'detail/:id', component: DetailQuestionComponent
      },
      {
        path: 'true-false', component: TrueFalseQuestionComponent
      },
      {
        path: 'input', component: InputQuestionComponent
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
export class QuestionRoutingModule {}
