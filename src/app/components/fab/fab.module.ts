import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FabComponent } from './fab.component';
import { RouterModule } from '@angular/router';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [
      FabComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
  ],
  exports: [
    FabComponent
  ]
})
export class FabModule { }
