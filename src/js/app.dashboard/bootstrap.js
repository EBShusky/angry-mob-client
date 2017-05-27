(function(){
  'use strict';

  angular.module('app.dashboard')

    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('root.dashboard', {
          url: '/dashboard',
          templateUrl: 'views/pages/dashboard.html',
          controller: 'DashboardController'
        });
    })
}());
