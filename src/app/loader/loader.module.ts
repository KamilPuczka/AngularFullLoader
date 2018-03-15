import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderComponent} from './loader.component';
import {LoaderService} from './loader.service';
import {ILoaderConfig, LOADER_GLOBAL_CONFIG} from './LoaderConfig';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoaderInterceptor} from './loader.interceptor';

class ModuleWithProviders {
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent
  ],
  exports: [
    LoaderComponent
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    }
  ]
})
export class LoaderModule {
  public static forRoot(options?: ILoaderConfig): ModuleWithProviders {
    let config: ILoaderConfig = {
      enableForHttp: true,
      enableForRouting: false,
      defaultDelay: 500
    };
    config = options ? Object.assign(config, options) : config;
    return {
      ngModule: LoaderModule,
      providers: [
        {
          provide: LOADER_GLOBAL_CONFIG,
          useValue: config
        },
      ],
    };

  }
}
