# AngularFullLoader

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.
AngularFullLoader is simply, complex, complete application loader fired by interceptor, router events or manualy. Whole behaviour can be configured in module or application.

## Installation

Run `npm install ng-full-loader --save` 

### Demo
Check Loader [Demo](https://stackblitz.com/github/KamilPuczka/AngularFullLoader)

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

After that you need to use Loader Component in your application e.g. in AppComponent

```html
<ng-full-loader></ng-full-loader>
<h1>Hello world</h1>
```
Now Angular Loader will appear in default configuration: in each HttpRequest, disabled on routing, with 500 ms delay.

#### 2. Configuration:

Default configuration can be changed in `NgFullLoaderModule.forRoot()` using interface:  

```ts
export interface ILoaderConfig {
  enableForRouting?: boolean;
  enableForHttp?: boolean;
  defaultDelay?: number;
}
```
e.g.

```ts
NgFullLoaderModule.forRoot({
      enableForRouting: true,
      defaultDelay: 100,
      enableForHttp: false
      })
```