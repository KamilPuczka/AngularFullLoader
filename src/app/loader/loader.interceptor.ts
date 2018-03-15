import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {LoaderService} from './loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.loaderService.IsHttpEnabled) {
      return;
    }
    return next
      .handle(req)
      .do(event => {
          if (event instanceof HttpResponse) {
            this.loaderService.hideLoader();
          } else {
            this.loaderService.showLoader();
          }
        },
        err => {
          this.loaderService.hideLoader();
        }
      );
  }
}
