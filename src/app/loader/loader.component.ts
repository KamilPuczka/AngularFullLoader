import {Component, Input, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {LoaderService} from './loader.service';
import {Subscription} from 'rxjs/Subscription';
import {ILoaderState} from './loader-state.interface';

@Component({
  selector: 'ng-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {
  @Input() public customTemplate: TemplateRef<any>;
  public show = false;
  private subscription: Subscription;


  constructor(private loaderService: LoaderService) { }

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
