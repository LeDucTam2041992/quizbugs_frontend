import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryAddComponent} from './category-add/category-add.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HomeComponent} from './home/home.component';
import {CategoryRoutingModule} from "./category-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import {SharedModule} from "../../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {MatInputModule} from "@angular/material/input";


@NgModule({
    declarations: [CategoryListComponent, CategoryAddComponent, CategoryEditComponent, HomeComponent],
    imports: [
        CategoryRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule,
        MatTabsModule,
        SharedModule,
        MatButtonModule,
        MatSortModule,
        MatInputModule,
    ]
})
export class CategoryModule {
}
