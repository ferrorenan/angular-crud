import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Card } from '../../../models/card';
import { MoviesService } from '../../../services/movies.service';
import { animateListItems } from '../../../animations/animations';

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
            take(3),
        );
  }

  editMovies(movieId: string): void {

    console.log(movieId);
  }
}
