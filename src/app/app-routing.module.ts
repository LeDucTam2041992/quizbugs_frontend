import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {LayoutWithSharedComponent} from "./layout-with-shared/layout-with-shared.component";
import {CreateAccountComponent} from "./components/create-account/create-account.component";
import {AppComponent} from "./app.component";
import {CategoryModule} from "./components/category/category.module";
import {DemoNavComponent} from "./demo-nav/demo-nav.component";
import {CategoryListComponent} from "./components/category/category-list/category-list.component";
import {QuestionComponent} from "./questions/question/question.component";

const routes: Routes = [
  // {
  //   path: 'login' , component: LoginComponent
  // }, {
  //   path: 'create_account' , component: CreateAccountComponent
  // },
  {
    path:'',
    component: LayoutWithSharedComponent
  },
  {
    path: 'questions',
    children: [
      {
        path: 'categories',
        loadChildren: (() => import('./components/category/category.module').then(() => CategoryModule))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
