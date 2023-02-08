import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseFormComponent } from '../base-form/base-form.component';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AlertService } from '../../../services/alert.service';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent extends BaseFormComponent implements OnInit {

  passWord = 'renanferro';
  formData = '';

  @Output() formValueOutput = new EventEmitter<any>();
  @Input() typeOfManager: string | null = '';

  constructor(
      private _formBuilder: FormBuilder,
      private _alertService: AlertService,
      private _moviesService: MoviesService,
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
        : this.submitFormValue();
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

    this._alertService
        .alertWithConfirmation(
            'Nice!',
            'Please wait, we are adding the new item!',
            'info',
        );

    this._moviesService.insertMovies(this.formulary.getRawValue())
        .subscribe({
          next: ((response) => {
            console.log(response);
          }),
          error: ((error) => {
            console.log(error);
            this._alertService
                .showFeedbackClient(
                    'OooOuuhH!',
                    'Something happened and we had a error!',
                    'error',
                );
          }),
          complete: (() => {
            this._alertService
                .showFeedbackClient(
                    'New item added!',
                    'Your new item was added in your market list!',
                    'success',
                );
          })
        })
  }
}
