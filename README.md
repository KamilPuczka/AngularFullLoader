# AngularFullLoader

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.
AngularFullLoader is simply, complex, complete application loader fired by interceptor, router events or manualy. Whole behaviour can be configured in module or application.

## Installation

Run `npm install ng-full-loader --save` 

## Usage
#### 1. Import the `NgFullLoaderModule`:
Finally, you can use ng-full-loader in your Angular project. You have to import `NgFullLoaderModule.forRoot()` in the root NgModule of your application.


The [`forRoot`](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-for-root) static method is a convention that provides and configures services at the same time.
Make sure you only call this method in the root module of your application, most of the time called `AppModule`.
This method allows you to configure the `NgFullLoaderModule';

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
    imports: [
        BrowserModule,
        NgFullLoaderModule.forRoot()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```