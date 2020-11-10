import {NgModule} from "@angular/core";
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import {MatTabsModule} from "@angular/material/tabs";
import {SharedModule} from "../../shared/shared.module";
import {HomeComponent} from "./home/home.component";
import {ExamHistoryRoutingModule} from "./exam-history-routing.module";


@NgModule({
    declarations: [
        HistoryListComponent,
        HistoryDetailComponent,
        HomeComponent],
    imports: [
        ExamHistoryRoutingModule,
        MatTabsModule,
        SharedModule
    ]
})
export class ExamHistoryModule {
}
