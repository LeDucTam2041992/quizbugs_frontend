import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManagementUserComponent} from "./management-user.component";
import {HistoryListComponent} from "../../user/exam-history/history-list/history-list.component";
import {HistoryDetailComponent} from "../../user/exam-history/history-detail/history-detail.component";

const routes: Routes = [
        {
            path: '',
            component: ManagementUserComponent,
        },
        {
            path: ':id',
            component: HistoryListComponent
        },
        {
            path: 'detail/:id',
            component: HistoryDetailComponent
        }

    ]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagementUserRoutingModule {
}
