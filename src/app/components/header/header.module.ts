import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LinkModule } from '../link/link.module';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [
      HeaderComponent
  ],
  imports: [
    CommonModule,
    LinkModule,
    IconModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
