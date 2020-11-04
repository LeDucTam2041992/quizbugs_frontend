import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {CategoryModule} from "./questions/category/category.module";

const routes: Routes = [
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
