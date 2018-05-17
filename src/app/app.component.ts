import {Component} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {NgFullLoaderService} from '../../projects/ng-full-loader/src/lib/ng-full-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private loaderService: NgFullLoaderService) {
  }

  public showLoader() {
    this.loaderService.showLoader(0);
    setTimeout(() => this.loaderService.hideLoader(), 1000);
  }
}
