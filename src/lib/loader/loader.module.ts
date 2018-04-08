import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgFullLoaderComponent} from './loader.component';
import {NgFullLoaderService} from './loader.service';
import {ILoaderConfig, LOADER_GLOBAL_CONFIG} from './LoaderConfig';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoaderInterceptor} from './loader.interceptor';

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
      useClass: LoaderInterceptor,
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
