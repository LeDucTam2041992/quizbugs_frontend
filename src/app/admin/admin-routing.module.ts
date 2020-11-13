import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { childRoutes } from './child-routes';


const routes: Routes = [
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      ...childRoutes,
      {
        path: '',
        redirectTo: 'management-user',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
