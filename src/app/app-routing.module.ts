import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouterLoaderService} from './router-loader.service';
import {RouterLoaderComponent} from './router-loader/router-loader.component';

const appRoutes: Routes = [
  { path: 'routerTest',
    component: RouterLoaderComponent,
    resolve: {
      value: RouterLoaderService
    }}
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    RouterLoaderService
  ]
})
export class AppRoutingModule {

}
