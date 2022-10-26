import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
declare let alertify:any
@Injectable({
  providedIn: 'root'
})
export class ErrorinterceptService implements HttpInterceptor {

  constructor(private router: Router) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
): Observable<HttpEvent<any>> {
    return next.handle(request)
        .pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => {
                let errorMessage = '';
                if(error.error.message!=null)             
               alertify.error(error.error.message);
               else
               {
                if(error.error.error=='Internal Server Error')
                alertify.error('Session Expired');
                else
                alertify.error(error.error.error);
                this.router.navigate(['login']);
               }
                return throwError(errorMessage);
            })
        )
} 
}
