(function(){
  'use strict';

  angular.module('app.dashboard')
    .service('Statistic', function($q, $http){
      var API_URL = 'http://192.168.1.130:8080';

      return {
        getSex: function(filters){
          return $http({
            method: 'GET',
            url:    API_URL + '/info/genderSummary',
            params: filters
          })
            .then(function(res){
              return res.data;
            });
        },

        getAge: function(filters){
          return $http({
            method: 'GET',
            url:    API_URL + '/info/ageSummary',
            params: filters
          })
            .then(function(res){
              return res.data;
            });
        },

        /**
         *
         * @param filters
         */
        getHours: function(filters){
          // return $http({
          //   method: 'GET',
          //   url:    API_URL + '/info/hoursSummary',
          //   params: filters
          // })
          //   .then(function(res){
          //     return res.data;
          //   });

          return $q.resolve({
            '8': 12,
            '12': 4,
            '13': 5
          });
        },

        /**
         * 
         * @param filters
         * @returns {*}
         */
        getPeopleQuantity: function(filters){
          return $http({
            method: 'GET',
            url:    API_URL + '/info/peopleQuantity',
            params: filters
          })
            .then(function(res){
              return res.data.peopleQuantity;
            });
        }
      }
    });
}());
