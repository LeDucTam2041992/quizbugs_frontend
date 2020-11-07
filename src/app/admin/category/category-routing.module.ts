import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CategoryAddComponent} from "./category-add/category-add.component";
import {CategoryEditComponent} from "./category-edit/category-edit.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      {
        path: 'list', component: CategoryListComponent
      },
      {
        path: 'add', component: CategoryAddComponent
      },
      {
        path: ':id/edit', component: CategoryEditComponent
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
export class CategoryRoutingModule { }
