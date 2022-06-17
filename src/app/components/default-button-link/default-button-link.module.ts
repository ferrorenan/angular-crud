import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultButtonLinkComponent } from './default-button-link.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
      DefaultButtonLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    DefaultButtonLinkComponent
  ]
})
export class DefaultButtonLinkModule { }
