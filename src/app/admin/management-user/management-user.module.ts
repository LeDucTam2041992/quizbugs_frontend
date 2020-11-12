import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementUserRoutingModule } from './management-user-routing.module';
import { ManagementUserComponent } from './management-user.component';
import {MaterialsModule} from "../../materials.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ManagementUserComponent],
  imports: [
    CommonModule,
    ManagementUserRoutingModule,
    MaterialsModule,
    FormsModule
  ]
})
export class ManagementUserModule { }
