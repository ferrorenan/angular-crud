import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AlertService } from '../../../services/alert.service';
import { Card } from '../../../models/card';
import { MarketService } from '../../../services/market.service';
import { Store } from '@ngxs/store';
import { MarketListActions } from '../../../store/actions/market-list.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends BaseFormComponent implements OnInit {

  passWord = 'renanferro';
  formData = '';

  @Output() formValueOutput = new EventEmitter<any>();
  @Input() typeOfManager: 'insert' | 'edit' | 'delete';
  @Input() productData: Card;

  constructor(
      private _formBuilder: FormBuilder,
      private _alertService: AlertService,
      private _marketService: MarketService,
      private _store: Store
  ) {
    super();
  }

  ngOnInit(): void {

    this.buildForm();


    const myOffcanvas = document.getElementById('offcanvasWithBackdrop')
    // @ts-ignore
    myOffcanvas.addEventListener('shown.bs.offcanvas', () => {

      if (this.typeOfManager === 'edit') {

        this.pathFormValuesToEdit();
      }
    })
  }

  buildForm(): void {

    this.formulary = this._formBuilder.group({
      name: [null, [Validators.required]],
      quantity: [null, [Validators.required]],
    });
  }

  pathFormValuesToEdit(): void {

    this.formulary.patchValue({
      name: this.productData.name,
      quantity: this.productData.quantity
    })
  }

  validateFormulary(): void {

    !this.formulary.valid
        ? this.verifyFormValidations(this.formulary)
        : this.submitFormValue();
  }

  private validateFormularyToSubmit(): boolean {

    return !this.formulary.valid
  }

  verifyFormEditToSubmit(): void {

    this.validateFormularyToSubmit()
        ? this.verifyFormValidations(this.formulary)
        : this.submitFormEditProductValues()
  }

  submitFormEditProductValues(): void {

    Swal.fire({
      title: 'Insert the password to add',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Validate',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        if (login != this.passWord) {

          this._alertService
              .alertWithConfirmation(
                  'Ooopss!',
                  'Something is wrong!',
                  'error',
              );
        } else {

          this.updateProductData();
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }

  submitFormValue(): void {

    Swal.fire({
      title: 'Insert the password to add',
      input: 'password',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'Validate',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        if (login != this.passWord) {

          this._alertService
              .alertWithConfirmation(
                  'Ooopss!',
                  'Something is wrong!',
                  'error',
              );
        } else {

          this.insertNewProductToMarketList();
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }

  insertNewProductToMarketList(): void {

    this._store.dispatch(new MarketListActions.InsertItemFromMarketList(this.formulary.getRawValue()));
  }

  updateProductData(): void {

    const productUpdated: Card = {
      id: this.productData.id,
      name: this.formulary.value.name,
      quantity: this.formulary.value.quantity,
    };

    this._store.dispatch(new MarketListActions.UpdateItemFromMarketList(productUpdated));
  }
}
