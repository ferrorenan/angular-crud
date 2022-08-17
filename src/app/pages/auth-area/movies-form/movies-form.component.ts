import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../services/movies.service';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.scss']
})
export class MoviesFormComponent implements  OnInit {

  formData = '';

  constructor(
      private _moviesService: MoviesService
  ) {}

  ngOnInit(): void {}

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
            console.log('deu');
          })
        })
  }
}
