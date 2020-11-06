import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListQuestionComponent} from './list-question/list-question.component';
import {AddQuestionComponent} from './add-question/add-question.component';
import {EditQuestionComponent} from './edit-question/edit-question.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'list-question',
        component: ListQuestionComponent,
      },
      {
        path: 'question/add',
        component: AddQuestionComponent,
      },
      {
        path: 'question/:id/edit',
        component: EditQuestionComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
