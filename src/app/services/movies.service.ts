import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AbstractionApiService } from './abstraction-api.service';
import { Movies } from '../models/movies';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
      private _abstractionApi: AbstractionApiService
  ) { }

  getMovies(): Observable<Card[]> {
    return this._abstractionApi
        .get('movies')
        .pipe(
            tap(response => console.log(response))
        )
  }
}
