import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputSimpleComponent} from './input-simple/input-simple.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableComponent} from './table/table.component';
import {DemoNavComponent} from './demo-nav/demo-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {MaterialsModule} from "./materials/materials.module";
import { LayoutWithSharedComponent } from './layout-with-shared/layout-with-shared.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSimpleComponent,
    TableComponent,
    DemoNavComponent,
    FooterComponent,
    LoginComponent,
    LayoutWithSharedComponent,
  ],
  imports: [
    MaterialsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
