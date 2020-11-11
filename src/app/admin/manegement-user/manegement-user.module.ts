import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManegementUserRoutingModule } from './manegement-user-routing.module';
import { ManegementUserComponent } from './manegement-user.component';


@NgModule({
  declarations: [ManegementUserComponent],
  imports: [
    CommonModule,
    ManegementUserRoutingModule
  ]
})
export class ManegementUserModule { }
