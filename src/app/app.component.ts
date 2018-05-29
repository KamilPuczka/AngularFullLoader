import {Component} from '@angular/core';
import {NgFullLoaderService} from '../../projects/ng-full-loader/src/lib/ng-full-loader.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loaderService: NgFullLoaderService, private router: Router) {
  }

  public showLoader() {
    this.loaderService.showLoader(0);
    setTimeout(() => this.loaderService.hideLoader(), 5000);
  }
  public testRouterLoader(){
    this.router.navigate(['routerTest']);
  }
}
