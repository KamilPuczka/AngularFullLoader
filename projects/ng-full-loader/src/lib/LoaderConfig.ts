import {InjectionToken} from '@angular/core';

export const LOADER_GLOBAL_CONFIG =
  new InjectionToken<ILoaderConfig>('loader-global-config');

export interface ILoaderConfig {
  enableForRouting?: boolean;
  enableForHttp?: boolean;
  defaultDelay?: number;
}
