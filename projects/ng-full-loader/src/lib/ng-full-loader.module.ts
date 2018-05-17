import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ILoaderConfig, LOADER_GLOBAL_CONFIG} from './LoaderConfig';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {NgFullLoaderComponent} from './ng-full-loader.component';
import {NgFullLoaderService} from './ng-full-loader.service';
import {NgFullLoaderInterceptor} from './ng-full-loader.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgFullLoaderComponent
  ],
  exports: [
    NgFullLoaderComponent
  ],
  providers: [
    NgFullLoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NgFullLoaderInterceptor,
      multi: true,
    }
  ]
})
export class NgFullLoaderModule {
  public static forRoot(options?: ILoaderConfig): ModuleWithProviders {
    let config: ILoaderConfig = {
      enableForHttp: true,
      enableForRouting: false,
      defaultDelay: 500
    };
    config = options ? Object.assign(config, options) : config;
    return {
      ngModule: NgFullLoaderModule,
      providers: [
        {
          provide: LOADER_GLOBAL_CONFIG,
          useValue: config
        },
      ],
    };

  }
}
