(function(){
  'use strict';

  angular.module('app.dashboard')
    .service('Statistic', function($q){
      return {
        getSex: function(filters){
          return $q.resolve({
            'men': Math.random() * 100,
            'women': 100
          });
        }
      }
    });
}());
