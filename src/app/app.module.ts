import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NgFullLoaderModule} from '../lib/loader/loader.module';
import {AppRoutingModule} from './app-routing.module';
import {InMemLoaderService} from './mock-db.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppService} from './app.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFullLoaderModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemLoaderService, {delay: 5000})
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
