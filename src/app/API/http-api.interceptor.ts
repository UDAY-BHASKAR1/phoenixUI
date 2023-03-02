import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // const token = this.auth.getToken();
    let headers = request.headers;
    // .set('client-id', environment.CLIENT_ID)
    // .set('client-secret', environment.cLIENT_SECRET)
    // .set('Authorization', 'Bearer ' + token);

    const newRequest = request.clone({ headers });
    return next.handle(newRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        let ErrorMessage = this.ErrorToaster(error);

        return throwError(ErrorMessage);
      })
    );
  }
  ErrorToaster(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log('Your Offline');
    } else {
      console.log(error.error.error);
    }
  }
}
