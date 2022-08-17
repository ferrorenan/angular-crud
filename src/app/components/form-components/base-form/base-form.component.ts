import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  template: '<br>',
})
export abstract class BaseFormComponent {

  formulary: FormGroup = {} as FormGroup;

  protected constructor() { }

  verifyFormValidations(formGroup: FormGroup): void {

    Object.keys(formGroup.controls).forEach(field => {

      const controlField = formGroup.get(field);
      controlField?.markAsDirty();
      controlField?.markAsTouched();
      if (controlField instanceof FormGroup) {

        this.verifyFormValidations(controlField);
      }
    });
  }

  verifyValidTouched(field: string): any {
    return (
        !this.formulary.get(field)?.valid &&
        (this.formulary.get(field)?.touched || this.formulary.get(field)?.dirty)
    );
  }

  applyClassStyleError(field: string): any {

    return {
      'is-invalid': this.verifyValidTouched(field)
    };
  }

  getField(field: string): any {

    return this.formulary.get(field);
  }
}
