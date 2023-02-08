import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { AlertService } from '../../services/alert.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.scss']
})
export class OffcanvasComponent implements OnInit {

  formData = '';
  passWord = 'renanferro';

  @Input() managerType: 'insert' | 'edit' | 'delete';

  constructor(
      private _moviesService: MoviesService,
      private _alertService: AlertService,
      private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {

  }

  getFormValue(formValue: any): void {

    this.formData = formValue
    console.log(this.formData);
  }

  validateToInsert(): void {

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

          this.insertNewMovie();
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    })
  }

  insertNewMovie(): void {

    this._alertService
        .alertWithConfirmation(
            'Nice!',
            'Please wait, we are adding the new item!',
            'info',
        );

    this._moviesService.insertMovies(this.formData)
        .subscribe({
          next: ((response) => {
            console.log(response);
          }),
          error: ((error) => {
            console.log(error);
          }),
          complete: (() => {
            this._alertService
                .alertWithConfirmation(
                    'Item Adicionado!',
                    'Deseja continuar adicionando items em sua lista de compra!?',
                    'success',
                )
          })
        })
  }
}
