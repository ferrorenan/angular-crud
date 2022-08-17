import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputTextComponent } from './form-input-text.component';
import {
  FormErrorMessageModule
} from '../form-error-message/form-error-message.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
      FormInputTextComponent
  ],
  imports: [
    CommonModule,
    FormErrorMessageModule,
    FormsModule,
  ],
  exports: [
    FormInputTextComponent
  ]
})
export class FormInputTextModule { }
