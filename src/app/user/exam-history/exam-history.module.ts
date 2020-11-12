import {NgModule} from "@angular/core";
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import {MatTabsModule} from "@angular/material/tabs";
import {SharedModule} from "../../shared/shared.module";
import {HomeComponent} from "./home/home.component";
import {ExamHistoryRoutingModule} from "./exam-history-routing.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCardModule} from "@angular/material/card";
import {MatRadioModule} from "@angular/material/radio";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
    declarations: [
        HistoryListComponent,
        HistoryDetailComponent,
        HomeComponent],
    imports: [
        ExamHistoryRoutingModule,
        MatTabsModule,
        SharedModule,
        MatIconModule,
        MatFormFieldModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatInputModule,
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
        MatRadioModule,
        MatCheckboxModule,
        ReactiveFormsModule
    ]
})
export class ExamHistoryModule {
}
