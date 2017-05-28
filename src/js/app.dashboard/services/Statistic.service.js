(function(){
  'use strict';

  angular.module('app.dashboard')
    .service('Statistic', function($q, $http){
      var API_URL = 'http://192.168.1.130:8080';

      return {
        /**
         *
         * @param filters
         * @returns {*}
         */
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

        /**
         *
         * @param filters
         * @returns {*}
         */
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
          return $http({
            method: 'GET',
            url:    API_URL + '/info/hoursSummary',
            params: filters
          })
            .then(function(res){
              return res.data;
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
        },

        /**
         *
         * @param filters
         */
        getEmotions: function(filters){
          return $http({
            method: 'GET',
            url:    API_URL + '/info/emotionSummary',
            params: filters
          })
            .then(function(res){
              return res.data;
            });
        }
      }
    });
}());
