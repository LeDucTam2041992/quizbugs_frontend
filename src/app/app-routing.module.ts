import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutWithSharedComponent} from "./layout-with-shared/layout-with-shared.component";

const routes: Routes = [
  {
    path: 'login' , component: LoginComponent
  },
  {
    path:'',
    component: LayoutWithSharedComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
