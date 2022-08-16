import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../../../services/movies.service';
import { Movies } from '../../../../models/movies';
import { Observable, take } from 'rxjs';
import { animateListItems } from '../../../../animations/animations';
import { Card } from '../../../../models/card';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [
      animateListItems
  ]
})
export class MoviesComponent implements OnInit {

  movies$: Observable<Card[]> | undefined;

  constructor(
      private _moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {

    this.movies$ = this._moviesService.getMovies()
        .pipe(
            take(3),
        );
  }

  editMovies(movieId: string): void {

    console.log(movieId);
  }
}
