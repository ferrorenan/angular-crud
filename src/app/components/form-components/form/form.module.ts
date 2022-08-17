import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputTextModule } from '../form-input-text/form-input-text.module';



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
  ]
})
export class FormModule { }
