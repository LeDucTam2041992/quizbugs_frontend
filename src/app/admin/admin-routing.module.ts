import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {QuestionModule} from '../components/questions/question.module';
import {CategoryModule} from '../components/category/category.module';

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
        loadChildren: () => import('../components/questions/question.module').then(m => m.QuestionModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../components/category/category.module').then(m => m.CategoryModule)
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
