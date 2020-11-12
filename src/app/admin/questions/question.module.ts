import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListQuestionComponent} from './list-question/list-question.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {CreateQuestionComponent} from './create-question/create-question.component';
import {EditQuestionComponent} from './edit-question/edit-question.component';
import {DetailQuestionComponent} from './detail-question/detail-question.component';
import {MessageComponent} from '../message/message.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatCardModule} from "@angular/material/card";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSelectModule} from "@angular/material/select";
import {HomeComponent} from "./home/home.component";
import {MatTabsModule} from "@angular/material/tabs";
import {QuestionRoutingModule} from "./question-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from '@angular/material/paginator';
import {TrueFalseQuestionComponent} from './true-false-question/true-false-question.component';
import {EditInputQuestionComponent} from './edit-input-question/edit-input-question.component';
import {EditTrueFalseQuestionComponent} from './edit-true-false-question/edit-true-false-question.component';
import {InputQuestionComponent} from './input-question/input-question.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    declarations: [
        HomeComponent,
        ListQuestionComponent,
        CreateQuestionComponent,
        EditQuestionComponent,
        DetailQuestionComponent,
        MessageComponent,
        TrueFalseQuestionComponent,
        EditTrueFalseQuestionComponent,
        InputQuestionComponent,
        EditInputQuestionComponent,
        DeleteDialogComponent,
    ],
    exports: [
        DetailQuestionComponent,
        MessageComponent
    ],
    imports: [
        QuestionRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatRadioModule,
        MatCardModule,
        MatCheckboxModule,
        MatSelectModule,
        RouterModule,
        MatTabsModule,
        SharedModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatPaginatorModule,
        MatDialogModule,
    ]
})
export class QuestionModule {
}
