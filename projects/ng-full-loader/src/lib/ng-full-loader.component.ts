import {Component, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {Subscription} from 'rxjs/index';
import {ILoaderState} from './ng-full-loader-state.interface';
import {NgFullLoaderService} from './ng-full-loader.service';

@Component({
  selector: 'ng-full-loader',
  templateUrl: './ng-full-loader.component.html',
  styleUrls: ['./ng-full-loader.component.css']
})
export class NgFullLoaderComponent implements OnInit, OnDestroy {
  @Input() public customTemplate: TemplateRef<any>;
  public show = false;
  private subscription: Subscription;


  constructor(private loaderService: NgFullLoaderService) { }

  public ngOnInit() {
    this.subscription = this.loaderService.loaderSubject
      .subscribe((state: ILoaderState) => {
        this.show = state.show;
      });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
