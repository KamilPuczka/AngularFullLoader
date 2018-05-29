import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgFullLoaderModule} from '../../projects/ng-full-loader/src/lib/ng-full-loader.module';
import {RouterModule, Routes} from '@angular/router';
import {RouterLoaderService} from './router-loader.service';
import { RouterLoaderComponent } from './router-loader/router-loader.component';
import {AppRoutingModule} from './app-routing.module';
import {MatSlideToggleModule} from '@angular/material';


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
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
