(function(){
  'use strict';

  angular.module('app.dashboard')
    .service('DataGrouper', function($q, $http){
      return function(data, group){
        // {
        //   '0': 5,
        //   '1': 4,
        //   '2': 2,
        //   '3': 4,
        //   '4': 2,
        //   '5': 1
        // },
        // [2, 3, 5]
      }
    });
}());
