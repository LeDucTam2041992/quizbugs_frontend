import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutWithSharedComponent} from "./layout-with-shared/layout-with-shared.component";
import {CategoryModule} from "./components/category/category.module";
import {ListQuestionComponent} from "./components/questions/list-question/list-question.component";
import {CreateQuestionComponent} from "./components/questions/create-question/create-question.component";
import {LoginComponent} from "./components/login/login.component";
import {CreateAccountComponent} from "./components/create-account/create-account.component";
// import {EditQuestionComponent} from "./components/questions/edit-question/edit-question.component";


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'create_account', component: CreateAccountComponent
  },
  {
    path: '',
    component: LayoutWithSharedComponent
  },
  {
    path: 'questions',
    children: [
      {
        path: 'categories',
        loadChildren: (() => import('./components/category/category.module').then(() => CategoryModule))
      },
      {
        path: '',
        component: ListQuestionComponent
      },
      {
        path: 'add',
        component: CreateQuestionComponent
      }
      // {
      //   path: 'edit',
      //   component: EditQuestionComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
