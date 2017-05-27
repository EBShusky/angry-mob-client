(function(){
  'use strict';

  angular.module('app.dashboard')

    .config(function($stateProvider, $urlRouterProvider){
      $stateProvider
        .state('root.dashboard', {
          url: '/dashboard',
          templateUrl: 'views/pages/dashboard.html',
          controller: 'DashboardController',
          resolve: {
            filters:  function(){
              return {
                since:  moment().subtract(7, 'days').toDate(),
                to:     moment().toDate()
              };
            },
            getStatisticSex: function(Statistic){
              return function(filters){
                return Statistic.getSex(filters);
              }
            },

            dataSex: function(filters, getStatisticSex){
              return getStatisticSex(filters);
            }
          }
        });
    })
}());
