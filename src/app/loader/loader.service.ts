import {Inject, Injectable, Optional} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ILoaderState} from './loader-state.interface';
import {ILoaderConfig, LOADER_GLOBAL_CONFIG} from './LoaderConfig';
import {Subscription} from 'rxjs/Subscription';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from '@angular/router';

@Injectable()
export class LoaderService {
  public loaderSubject = new Subject<ILoaderState>();
  public loaderState = this.loaderSubject.asObservable();

  public get IsHttpEnabled(): boolean {
    return this.config.enableForHttp;
  }

  private _requestInStack = 0;
  private _routingStarted = 0;
  private _isPending = false;
  private _routingSubscription: Subscription;

  private config: ILoaderConfig = {
    enableForHttp: true,
    enableForRouting: false,
    defaultDelay: 500
  };

  constructor(@Optional() @Inject(LOADER_GLOBAL_CONFIG) globalConfig: ILoaderConfig, private router: Router) {
    this.config = globalConfig ? Object.assign(this.config, globalConfig) : this.config;

    if (this.config.enableForRouting) {
      this.enableRoutingLoader();
    }
  }

  public showLoader(delay: number = this.config.defaultDelay): void {
    if (this._requestInStack < 0) {
      this._requestInStack = 0;
    }
    this._requestInStack++;
    if (!this._isPending) {
      setTimeout(() => this.show(), delay);
      this._isPending = true;
    }
  }

  public hideLoader(): void {
    if (this._requestInStack > 0) {
      this._requestInStack--;
    }
    if (this._requestInStack === 0 && this._isPending) {
      setTimeout(() => this.hide());
    }
  }

  public enableRoutingLoader(): void {
    if (!this._routingSubscription || this._routingSubscription.closed) {
      this._routingSubscription = this.router.events.subscribe((value: RouterEvent) => {
          return this.checkRouterEvent(value);
        }
      );
    }
  }

  public disableRoutingLoader(): void {
    this._routingSubscription.unsubscribe();
  }

  public enableHttpLoader(): void {
    this.config.enableForHttp = true;
  }

  public disableHttpLoader(): void {
    this.config.enableForHttp = false;
  }

  private hide(): void {
    if (this._requestInStack === 0) {
      this.loaderSubject.next(<ILoaderState> {show: false});
      this._isPending = false;
    }
  }

  private show(): void {
    if (this._requestInStack !== 0) {
      this.loaderSubject.next(<ILoaderState> {show: true});
    }
  }

  private checkRouterEvent(routerEvent: RouterEvent): void {
    if (routerEvent instanceof NavigationStart) {
      this.showLoader(0);
      this._routingStarted++;
    }
    if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      if (this._routingStarted > 0) {
        this.hideLoader();
        this._routingStarted--;
        return;
      }
    }
  }

}
