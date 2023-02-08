import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffcanvasComponent } from './offcanvas.component';
import { IconModule } from '../icon/icon.module';
import { FormModule } from '../form-components/form/form.module';



@NgModule({
  declarations: [
      OffcanvasComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    FormModule,
  ],
  exports: [
    OffcanvasComponent
  ]
})
export class OffcanvasModule { }
