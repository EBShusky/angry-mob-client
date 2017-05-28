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
                until:  moment().toDate()
              };
            },

            getStatisticSex: function(Statistic){
              return function(filters){
                return Statistic.getSex(filters);
              }
            },
            getStatisticAge: function(Statistic){
              return function(filters){
                return Statistic.getAge(filters);
              }
            },
            getStatisticHours: function(Statistic){
              return function(filters){
                return Statistic.getHours(filters);
              }
            },
            getStatisticPeopleQuantity: function(Statistic){
              return function(filters){
                return Statistic.getPeopleQuantity(filters);
              }
            },
            getStatisticEmotions: function(Statistic){
              return function(filters){
                return Statistic.getEmotions(filters);
              }
            },

            dataSex: function(filters, getStatisticSex){
              return getStatisticSex(filters);
            },
            dataAge: function(filters, getStatisticAge){
              return getStatisticAge(filters);
            },
            dataHours: function(filters, getStatisticHours){
              return getStatisticHours(filters);
            },
            dataPeopleQuantity: function(filters, getStatisticPeopleQuantity){
              return getStatisticPeopleQuantity(filters);
            },
            dataEmotions: function(filters, getStatisticEmotions){
              return getStatisticEmotions(filters);
            }
          }
        });
    })
}());
