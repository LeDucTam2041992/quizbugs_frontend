import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManagementUserComponent} from "./management-user.component";

const routes: Routes = [
  {
    path: '',
    component: ManagementUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementUserRoutingModule { }
