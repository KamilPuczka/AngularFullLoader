import {Component} from '@angular/core';
import {NgFullLoaderService} from '../../projects/ng-full-loader/src/lib/ng-full-loader.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loaderService: NgFullLoaderService, private router: Router, private httpClient: HttpClient) {
  }

  public showLoader() {
    this.loaderService.showLoader(0);
    setTimeout(() => this.loaderService.hideLoader(), 5000);
  }

  public testHttp() {
    this.httpClient.get('http://www.mocky.io/v2/5b0da594310000b20c9d5793?mocky-delay=5000ms').subscribe();
  }

  public testRouterLoader() {
    this.router.navigate(['routerTest']);
  }
}
