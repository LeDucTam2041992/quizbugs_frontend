import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutWithSharedComponent} from "./layout-with-shared/layout-with-shared.component";
import {CreateAccountComponent} from "./create-account/create-account.component";
import {AppComponent} from "./app.component";
import {CategoryModule} from "./questions/category/category.module";

const routes: Routes = [
  // {
  //   path: 'login' , component: LoginComponent
  // }, {
  //   path: 'create_account' , component: CreateAccountComponent
  // },
  // {
  //   path:'',
  //   component: LayoutWithSharedComponent
  // },
  {
    path: 'questions',
    component: AppComponent,
    children: [
      {
        path: 'categories',
        loadChildren: (() => import('./questions/category/category.module').then(() => CategoryModule))
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
