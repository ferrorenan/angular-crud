import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Card } from '../models/card';

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(
      private _httpClient: HttpClient
  ) { }

  getMovies(): Observable<Card[]> {
    return this._httpClient
        .get<Card[]>('marketList')
        .pipe(
            tap(response => console.log(response))
        )
  }

  insertMovies(movieData: any): Observable<any> {
    return this._httpClient
        .post('marketList', movieData)
  }

  editProductData(productData: Card): Observable<any> {
    return this._httpClient
        .put<any>(`marketList/${productData.id}`, {
          id: productData.id,
          name: productData.name,
          quantity: productData.quantity,
        })
  }

  removeItemFromList(productId: string): Observable<any> {
    return this._httpClient
        .delete<any>(`marketList/${productId}`)
  }
}
