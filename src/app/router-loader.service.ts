import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/internal/operators';

@Injectable()
export class RouterLoaderService implements Resolve<string> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string>{
    return of("Router navigation finished").pipe(
      delay(5000)
    )
  }
}

