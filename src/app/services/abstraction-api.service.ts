import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbstractionApiService {

  constructor(
      private _httpClient: HttpClient
  ) { }

  get(pathEndpoint: string) {
    return this._httpClient
        .get<any>(`${environment.urlApi}/${pathEndpoint}`)
  }
}
