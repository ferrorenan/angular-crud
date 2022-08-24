import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { LinkModule } from '../link/link.module';
import {
  ToggleThemeSiteModule
} from '../toggle-theme-site/toggle-theme-site.module';



@NgModule({
  declarations: [
      HeaderComponent
  ],
  imports: [
    CommonModule,
    LinkModule,
    ToggleThemeSiteModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
