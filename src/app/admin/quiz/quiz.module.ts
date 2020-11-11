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





@NgModule({
  declarations: [
      CreateQuizComponent,
      HomeQuizComponent
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
    ]
})
export class QuizModule { }
