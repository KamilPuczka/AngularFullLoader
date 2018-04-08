import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {
  }

  getLoader(): Observable<{ id: number, name: string }> {
    return this.http.get<{ id: number, name: string }>(`api/loader`);
  }
}
