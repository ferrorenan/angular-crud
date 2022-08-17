import { Component, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

const INPUT_FIELD_VALUE_ACESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  multi: true,
  useExisting: forwardRef(() => FormInputTextComponent),
};

@Component({
  selector: 'app-form-input-text',
  templateUrl: './form-input-text.component.html',
  styleUrls: ['./form-input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputTextComponent),
      multi: true
    }
  ]
})
export class FormInputTextComponent implements ControlValueAccessor {

  @Input() labelDescription = '';
  @Input() inputName = '';
  @Input() control: any;
  @Input() classInput = '';

  constructor() {}

  get value(): any {
    return this.innerValue;
  }

  set value(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onTouch(value);
      this.onChange(value);
    }
  }
  innerValue = '';

  onChange: any = () => {};
  onTouch: any = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: any): void {
    this.innerValue = value;
  }
}
