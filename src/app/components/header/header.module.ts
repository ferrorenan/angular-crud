import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LinkModule } from '../link/link.module';



@NgModule({
  declarations: [
      HeaderComponent
  ],
  imports: [
    CommonModule,
    LinkModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
