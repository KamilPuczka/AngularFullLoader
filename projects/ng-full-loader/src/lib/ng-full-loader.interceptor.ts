import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {NgFullLoaderService} from './ng-full-loader.service';
import {Observable} from 'rxjs/index';
import {tap} from 'rxjs/internal/operators';

@Injectable()
export class NgFullLoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: NgFullLoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.loaderService.IsHttpEnabled) {
      return;
    }
    return next
      .handle(req)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            this.loaderService.hideLoader();
          } else {
            this.loaderService.showLoader();
          }
        },
        err => {
          this.loaderService.hideLoader();
        }
      ));
  }
}
