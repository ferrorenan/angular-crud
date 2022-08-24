import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleThemeSiteComponent } from './toggle-theme-site.component';
import { IconModule } from '../icon/icon.module';



@NgModule({
  declarations: [
      ToggleThemeSiteComponent
  ],
  imports: [
    CommonModule,
    IconModule,
  ],
  exports: [
    ToggleThemeSiteComponent
  ]
})
export class ToggleThemeSiteModule { }
