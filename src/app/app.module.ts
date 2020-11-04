import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
