import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgFullLoaderModule} from '../../projects/ng-full-loader/src/lib/ng-full-loader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgFullLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
