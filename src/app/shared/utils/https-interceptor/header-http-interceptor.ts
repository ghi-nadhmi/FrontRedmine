import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class HeaderHttpInterceptor implements HttpInterceptor {
  constructor(
    private router: Router) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('token') !== null) {
      const token = sessionStorage.getItem('token');
      if (token) {
        request = request.clone({
          headers: request.headers.set('Authorization', 'Bearer ' + token)
        });
      }
    }
    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });


    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        console.log('------------------401');
      } else if(err.status === 403) {
        console.log('------------------403');
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));

  }
}
