import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSimpleComponent } from './input-simple/input-simple.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableComponent} from './table/table.component';
import {DemoNavComponent} from './demo-nav/demo-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {MaterialsModule} from "./materials/materials.module";
import {LayoutWithSharedComponent} from './layout-with-shared/layout-with-shared.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSimpleComponent,
    TableComponent,
    DemoNavComponent,
    FooterComponent,
    LoginComponent,
    LayoutWithSharedComponent,
    CreateAccountComponent,
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
    CategoryModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
