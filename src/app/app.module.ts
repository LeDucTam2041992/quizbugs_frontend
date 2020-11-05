import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '@angular/cdk/layout';
import {LoginComponent} from './components/login/login.component';
import {MaterialsModule} from "./materials/materials.module";
import {LayoutWithSharedComponent} from './layout-with-shared/layout-with-shared.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {CategoryModule} from "./questions/category/category.module";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutWithSharedComponent,
    CreateAccountComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    MaterialsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    CategoryModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
