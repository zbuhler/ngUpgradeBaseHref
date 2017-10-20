import angular from 'angular';
// import uiRouter from 'angular-ui-router';
// import uiRouter from 'angular-ui-router';
import uiRouter from '@uirouter/angularjs';

export const module = angular.module('AngularJSApp', [uiRouter]);

module.config(($locationProvider, $stateProvider) => {
  $stateProvider.decorator('parent', function (internalStateObj, parentFn) {
    // This fn is called by StateBuilder each time a state is registered

    // The first arg is the internal state. Capture it and add an accessor to public state object.
    internalStateObj.self.$$state = function() { return internalStateObj; };

    // pass through to default .parent() function
    return parentFn(internalStateObj); 
 });
 
 
  // use history api instead of URL fragment
 $locationProvider.html5Mode(true);

 $stateProvider.state('angularjs_a', {
   url: '/angularjs_a',
   template: `
   <a href="/angular_a">Go to Angular A</a>
   <a href="/angular_b">Go to Angular B</a>
   Go to AngularJS A
   <a href="/angularjs_b">Go to Angular JS B</a>
   <h1>Angular JS A!</h1>
   `
});

$stateProvider.state('angularjs_b', {
   url: '/angularjs_b/:id/constant/:someparam',
   params: {
    test: null
    },
   template: `
    <a href="/angular_a">Go to Angular A</a>
    <a href="/angular_b">Go to Angular B</a>
    <a href="/angularjs_a">Go to Angular JS A</a>
    Go to AngularJS B
    <h1>Angular JS B!</h1>
   `
 });

 $stateProvider.state('sink', {
    url: '/*path',
    template: ''
  });
});


module.run(($rootScope, $state) => {

  $rootScope.$on('$stateChangeStart',
    function (event, toState, toParams, fromState, fromParams, options) {
      console.log('$stateChangeStart', `TO: ${toState.url} ( ${toState.name} )`, `FROM: ${fromState.url} ( ${fromState.name} )`);
  });
  
  $rootScope.$on('$stateChangeCancel',
    function (event, toState, toParams, fromState, fromParams, options) {
      console.log('$stateChangeCancel', `TO: ${toState.url} ( ${toState.name} )`, `FROM: ${fromState.url} ( ${fromState.name} )`);
    });
  
  $rootScope.$on('$stateChangeSuccess',
    function (event, toState, toParams, fromState, fromParams, options) {
      console.log('$stateChangeSuccess', `TO: ${toState.url} ( ${toState.name} )`, `FROM: ${fromState.url} ( ${fromState.name} )`);
    });
  
  $rootScope.$on('$stateNotFound',
    function (event, toState, toParams, fromState, fromParams, options) {
      console.log('$stateNotFound', `TO: ${toState.url} ( ${toState.name} )`, `FROM: ${fromState.url} ( ${fromState.name} )`);
    });
  
  $rootScope.$on('$locationChangeStart', function(evt, next, current, newState, oldState) {
      console.log('$locationChangeStart', next, current, newState, oldState);
  });
  
  $rootScope.$on('$locationChangeSuccess', function(evt, next, current) {
      console.log('$locationChangeSuccess', next, current);
});


});