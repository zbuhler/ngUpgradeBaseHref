# ngUpgradeBaseHref
Demonstrates an issue with using Angular and AngularJS routers together when using the &lt;base> tag / using baseHref.

Following [this excellent tutorial](https://blog.nrwl.io/using-ngupgrade-like-a-pro-lazy-loading-angularjs-applications-469819f5c86) from Victor Savkin you are able to make the Angular Component Router and the AngularJS router or ui-router co-exist with each router handling their respective routes. If one router doesn't have a URL registered it renders a blank ```<router-outlet>``` or ```<ng-view>``` (or ```<ui-view>``` if using ui-router) and the other router renders the corresponding component.

This works great except for if you want to host your app anywhere but root.

Simply changing the following lines of .angular-cli.json to change the baseHref

```
"defaults": {
    "styleExt": "css",
    "component": {
    },
    "build": {
      "baseHref": "/"
    }
  }
```

to

```
"defaults": {
    "styleExt": "css",
    "component": {
    },
    "build": {
      "baseHref": "/sub/"
    }
  }
```

Causes a (seemingly) infinite redirect. Once you make the change you can still go from an Angular Route to an Angular Route but going from an Angular Route to an AngularJS route no longer works and you get in an endless loop between the two frameworks.

Steps to reproduce the issue:

 * Clone the repo
 * ```npm install```
 * ```ng serve```
 * View it working normally
 * Change the .angular-cli.json file per above instructions (change / to /sub/)
 * See it break.