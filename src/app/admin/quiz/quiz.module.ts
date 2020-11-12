import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateQuizComponent} from './create-quiz/create-quiz.component';
import { HomeQuizComponent } from './home-quiz/home-quiz.component';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {QuizRoutingModule} from './quiz-routing.module';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {QuestionModule} from '../questions/question.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MesDialogComponent } from './mes-dialog/mes-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import {MatTableModule} from '@angular/material/table';
import { DetailQuizComponent } from './detail-quiz/detail-quiz.component';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';





@NgModule({
  declarations: [
      CreateQuizComponent,
      HomeQuizComponent,
      MesDialogComponent,
      ListQuizComponent,
      DetailQuizComponent
  ],
    imports: [
        QuizRoutingModule,
        CommonModule,
        MatTabsModule,
        RouterModule,
        SharedModule,
        MatGridListModule,
        MatIconModule,
        QuestionModule,
        MatInputModule,
        MatButtonModule,
        MatSidenavModule,
        MatPaginatorModule,
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        MatDialogModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
    ]
})
export class QuizModule { }
