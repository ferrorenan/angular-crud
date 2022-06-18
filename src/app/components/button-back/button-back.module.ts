import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonBackComponent } from './button-back.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
      ButtonBackComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ButtonBackComponent
  ]
})
export class ButtonBackModule { }
