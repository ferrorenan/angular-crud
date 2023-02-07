import { Component, OnInit } from '@angular/core';
import { delay, Observable, take } from 'rxjs';
import { animateListItems } from '../../animations/animations';
import { Card } from '../../models/card';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-market-list',
  templateUrl: './market-list.component.html',
  styleUrls: ['./market-list.component.scss'],
  animations: [
    animateListItems
  ]
})
export class MarketListComponent implements OnInit {

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
            delay(7000),
        );
  }

  editMovies(movieId: string): void {

    console.log(movieId);
  }
}
