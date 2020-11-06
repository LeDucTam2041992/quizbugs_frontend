import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {QuestionModule} from '../components/questions/question.module';
import {CategoryModule} from '../components/category/category.module';
import {ListQuestionComponent} from '../components/questions/list-question/list-question.component';
import {CategoryListComponent} from '../components/category/category-list/category-list.component';

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
        path: 'questions',
        component: ListQuestionComponent,
      },
      {
        path: 'categories',
        component: CategoryListComponent,
      },
      {
        path: '',
        component: DashboardComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), QuestionModule, CategoryModule],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
