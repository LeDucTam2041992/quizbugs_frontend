import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LayoutModule} from '@angular/cdk/layout';
import {LoginComponent} from './login/login.component';
import {MaterialsModule} from "./materials/materials.module";
import {LayoutWithSharedComponent} from './layout-with-shared/layout-with-shared.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {CategoryModule} from "./questions/category/category.module";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from '@angular/material/table';
import {DemoNavComponent} from "./demo-nav/demo-nav.component";
import {FooterComponent} from "./footer/footer.component";
import { QuestionComponent } from './questions/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutWithSharedComponent,
    CreateAccountComponent,
    DemoNavComponent,
    FooterComponent,
    QuestionComponent,
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
