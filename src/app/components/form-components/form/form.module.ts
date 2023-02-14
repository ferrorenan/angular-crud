import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputTextModule } from '../form-input-text/form-input-text.module';
import { AlertService } from '../../../services/alert.service';



@NgModule({
  declarations: [
      FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormInputTextModule,
  ],
  exports: [
    FormComponent
  ],
  providers: [
    AlertService
  ],
})
export class FormModule { }
