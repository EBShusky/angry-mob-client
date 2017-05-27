(function(){
  'use strict';

  angular.module('app.dashboard')
    .directive('cardSimple', function(){
      return {
        restrict: 'EA',
        scope: {
          value: '<',
          desc: '@',
          type: '@'
        },
        templateUrl: 'views/templates/app.dashboard/card-simple.html'
      }
    });
}());
