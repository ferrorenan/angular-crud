import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';
import { AlertService } from '../../../services/alert.service';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.scss']
})
export class MoviesFormComponent implements  OnInit {

  formData = '';

  constructor(
      private _moviesService: MoviesService,
      private _alertService: AlertService
  ) {}

  ngOnInit(): void {
    this._alertService
        .alertWithConfirmation(
            'Item Adicionado!',
            'Deseja continuar adicionando items em sua lista de compra!?',
            'success',
        )
  }

  getFormValue(formValue: any): void {

    this.formData = formValue
    console.log(this.formData);
  }

  insertNewMovie(): void {

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
