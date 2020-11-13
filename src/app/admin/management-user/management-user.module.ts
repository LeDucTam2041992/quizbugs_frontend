import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementUserRoutingModule } from './management-user-routing.module';
import { ManagementUserComponent } from './management-user.component';
import {MaterialsModule} from "../../materials.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTooltipModule} from "@angular/material/tooltip";


@NgModule({
  declarations: [ManagementUserComponent],
  imports: [
    CommonModule,
    ManagementUserRoutingModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule
  ]
})
export class ManagementUserModule { }
