import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgFullLoaderModule} from '../../projects/ng-full-loader/src/lib/ng-full-loader.module';
import { RouterLoaderComponent } from './router-loader/router-loader.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RouterLoaderComponent
  ],
  imports: [
    BrowserModule,
    NgFullLoaderModule.forRoot({
      enableForRouting: true
      },
    ),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
