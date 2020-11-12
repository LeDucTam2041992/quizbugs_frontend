import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {LayoutComponent} from "./layout/layout.component";
import {TopNavComponent} from "./layout/top-nav/top-nav.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {_MatMenuDirectivesModule, MatMenuModule} from "@angular/material/menu";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {SideNavComponent} from "./layout/side-nav/side-nav.component";


@NgModule({
  declarations: [LayoutComponent, TopNavComponent, SideNavComponent],
  exports: [
    TopNavComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class UserModule { }
