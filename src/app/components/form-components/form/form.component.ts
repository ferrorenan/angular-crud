import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends BaseFormComponent implements OnInit {

  @Output() formValueOutput = new EventEmitter<any>();

  constructor(
      private _formBuilder: FormBuilder,
  ) {
    super();
  }

  ngOnInit(): void {

    this.buildForm();
  }

  buildForm(): void {

    this.formulary = this._formBuilder.group({
      name: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
    });
  }

  validateFormulary(): void {

    !this.formulary.valid
        ? this.verifyFormValidations(this.formulary)
        : this.emmitFormValue();
  }

  emmitFormValue(): void {

    this.formValueOutput.emit(this.formulary.getRawValue());
  }
}
