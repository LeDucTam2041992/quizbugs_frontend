import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListQuestionComponent} from './list-question/list-question.component';
import {AddQuestionComponent} from './add-question/add-question.component';
import {EditQuestionComponent} from './edit-question/edit-question.component';
import { DetailQuestionComponent } from './detail-question/detail-question.component';


@NgModule({
  declarations: [AdminComponent,
    DashboardComponent,
    ListQuestionComponent,
    AddQuestionComponent,
    EditQuestionComponent,
    DetailQuestionComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
