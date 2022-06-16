import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {

  constructor(
      private httpClient: HttpClient,
  ) { }

  getUserData(): Observable<User> {

    return this.httpClient.get<User>(
        `${ environment.urlApi }/user`,
    );
  }
}
