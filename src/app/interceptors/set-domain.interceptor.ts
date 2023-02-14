import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class SetDomainInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(httpRequest: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const requestUtlUpdated = httpRequest
        .clone({
          url: `${ environment.urlApi }/${ httpRequest.url }`,
          setHeaders: {
            'Content-Type': 'application/json'
          }
        });

    return next.handle(requestUtlUpdated);
  }
}
