(function(){
  'use strict';

  angular.module('app')

    .config(function($locationProvider){
      // In Angular 1.6 default hash-prefix is '!', previous is was empty string ''
      $locationProvider.hashPrefix('');
    })

    .config(function($stateProvider, $urlRouterProvider){
      $urlRouterProvider
        .otherwise('/dashboard');

      $stateProvider
        .state('root', {
          url: '',
          abstract: true,
          templateUrl: 'views/pages/root.html'
        });
    })
}());
