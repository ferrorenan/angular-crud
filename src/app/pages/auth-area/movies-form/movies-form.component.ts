import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-form',
  templateUrl: './movies-form.component.html',
  styleUrls: ['./movies-form.component.scss']
})
export class MoviesFormComponent implements  OnInit {

  constructor() {}

  ngOnInit(): void {}

  getFormValue(formValue: any): void {

    console.log(formValue);
  }
}
