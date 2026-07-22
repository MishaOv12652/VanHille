import { Injectable } from '@angular/core';
import { ConnectionBackend, Http, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class HttpErrorInterceptor extends Http {

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private flashMessages: FlashMessagesService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options).catch(error => this.handleError(error));
  }

  private handleError(error: any): Observable<any> {
    const message = !error.status
      ? 'שגיאת תקשורת: לא ניתן להתחבר לשרת'
      : 'אירעה שגיאה בשרת, נסו שוב מאוחר יותר';
    this.flashMessages.show(message, { cssClass: 'alert-danger', timeout: 4000 });
    return Observable.throw(error);
  }
}
