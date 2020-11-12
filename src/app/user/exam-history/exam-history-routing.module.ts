import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HistoryListComponent} from "./history-list/history-list.component";
import {HistoryDetailComponent} from "./history-detail/history-detail.component";
import {HomeComponent} from "./home/home.component";



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list', component: HistoryListComponent,
      },
      {
        path: 'detail/:id', component: HistoryDetailComponent,
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
export class ExamHistoryRoutingModule {}
