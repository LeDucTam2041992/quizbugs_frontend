import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListQuestionComponent} from './list-question/list-question.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing.module';
import {CategoryModule} from '../category/category.module';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from '../category/category-list/category-list.component';
import {CategoryAddComponent} from '../category/category-add/category-add.component';
import {CategoryEditComponent} from '../category/category-edit/category-edit.component';
import {CreateQuestionComponent} from './create-question/create-question.component';
import {EditQuestionComponent} from './edit-question/edit-question.component';
import {MatGridListModule} from '@angular/material/grid-list';
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
        NgSelectModule,
        MatPaginatorModule,
    ]
})
export class QuestionModule {
}
