(function(){
  'use strict';

  angular.module('app.dashboard')
    .directive('cardBlock', function(){
      return {
        restrict: 'EA',
        transclude: true,
        scope: {
          title: '@',
          subtitle: '@?',
          type: '@'
        },
        templateUrl: 'views/templates/app.dashboard/card-block.html'
      }
    });
}());
