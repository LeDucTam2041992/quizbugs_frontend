import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreateQuizComponent} from './create-quiz/create-quiz.component';
import { HomeQuizComponent } from './home-quiz/home-quiz.component';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {QuizRoutingModule} from './quiz-routing.module';



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
        SharedModule
    ]
})
export class QuizModule { }
