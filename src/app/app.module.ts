import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { downgradeInjectable, UpgradeModule } from '@angular/upgrade/static';
import {PreloadAllModules, RouterModule, UrlHandlingStrategy} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

// const baseURL = '/sf/ui/';


export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) { 
    debugger;
    // return url.toString().startsWith("/cars");
    return url; 
  }
  extract(url) { return url; }
  merge(url, whole) { return url; }
}


@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <div ng-view></div>
  `
})
export class AppComponent {}

@Component({
  template: `
    Go to Angular A
    <a routerLink="/angular_b">Go to Angular B</a>
    <a routerLink="/angularjs_a">Go to AngularJS A</a>
    <a routerLink="/angularjs_b">Go to AngularJS B</a>
    <h1>Angular A!</h1>
  `
})
export class AngularAComponent {}
 
@Component({
  template: `
    <a routerLink="/angular_a">Go to Angular A</a>
    Go to Angular B
    <a routerLink="/angularjs_a">Go to AngularJS A</a>
    <a routerLink="/angularjs_b">Go to AngularJS B</a>
    <h1>Angular B!</h1>
  `
})
export class AngularBComponent {}


@NgModule({
 declarations: [
   AppComponent,
   AngularAComponent,
   AngularBComponent
 ],
 imports: [
   BrowserModule,
   RouterModule.forRoot([
     {path: '', redirectTo: 'angular_a', pathMatch: 'full'},
     {path: 'angular_a', component: AngularAComponent},
     {path: 'angular_b', component: AngularBComponent},
     {path: '', loadChildren: './angularjs.module#AngularJSModule'}
   ], {
     enableTracing: true
    //  preloadingStrategy: PreloadAllModules // ADD THIS!
   })
 ],
 providers: [
  //  {provide: APP_BASE_HREF, useValue:"/sf/"},
  //  { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy }
  ],
 bootstrap: [AppComponent]
})
export class AppModule { }