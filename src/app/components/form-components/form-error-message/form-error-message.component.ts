import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-form-error-message',
  templateUrl: './form-error-message.component.html',
  styleUrls: ['./form-error-message.component.scss']
})
export class FormErrorMessageComponent implements OnInit {

  // @ts-ignore
  @Input() control: FormControl;
  @Input() fieldName = '';

  constructor() { }

  ngOnInit(): void {
  }

  get errorMessage(): any {

    for (const propertyName in this.control.errors){
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return FormValidations.getErrorMsg(this.fieldName, propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
