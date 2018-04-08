import {Component, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {NgFullLoaderService} from './loader.service';
import {Subscription} from 'rxjs/Subscription';
import {ILoaderState} from './loader-state.interface';

@Component({
  selector: 'app-ng-full-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class NgFullLoaderComponent implements OnInit, OnDestroy {
  @Input() public customTemplate: TemplateRef<any>;
  public show = false;
  private subscription: Subscription;


  constructor(private loaderService: NgFullLoaderService) { }

  public ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: ILoaderState) => {
        this.show = state.show;
      });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
