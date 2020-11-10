import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { ChangePasswordComponent } from './change-password/change-password.component';
import {DashboardComponent} from "./dashboard/dashboard.component";

@NgModule({
  imports: [
    MatSnackBarModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    LoginRoutingModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  declarations: [LoginComponent, RegisterComponent, HomeComponent, ChangePasswordComponent,DashboardComponent]
})
export class LoginModule {}
