import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractionApiService } from './abstraction-api.service';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
      private _abstractionApi: AbstractionApiService
  ) { }

  getMovies(): Observable<Movies[]> {
    return this._abstractionApi
        .get('movies')
        // .pipe(
        //     tap(response => console.log(response))
        // )
  }
}
