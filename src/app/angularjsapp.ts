import angular from 'angular';
// import uiRouter from 'angular-ui-router';
// import uiRouter from 'angular-ui-router';
// import uiRouter from '@uirouter/angularjs';

import ngRoute from 'angular-route';

export const module = angular.module('AngularJSApp', [ngRoute]);

module.config(($locationProvider, $routeProvider) => { 
  // use history api instead of URL fragment
 $locationProvider.html5Mode(true);

 $routeProvider.when('/angularjs_a', {
   template: `
     <a href="/angular_a">Go to Angular A</a>
     <a href="/angular_b">Go to Angular B</a>
     Go to AngularJS A
     <a href="/angularjs_b">Go to Angular JS B</a>
     <h1>Angular JS A!</h1>
   `
});

$routeProvider.when('/angularjs_b', {
   template: `
     <a href="/angular_a">Go to Angular A</a>
     <a href="/angular_b">Go to Angular B</a>
     <a href="/angularjs_a">Go to Angular JS A</a>
     Go to AngularJS B
     <h1>Angular JS B!</h1>
   `
 });

 $routeProvider.otherwise({template : ''});
});


module.run(($rootScope) => {
  
  $rootScope.$on('$locationChangeStart', function(evt, next, current, newState, oldState) {
      console.log('$locationChangeStart', next, current, newState, oldState);
  });
  
  $rootScope.$on('$locationChangeSuccess', function(evt, next, current) {
      console.log('$locationChangeSuccess', next, current);
});

});