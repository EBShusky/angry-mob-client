(function(){
  'use strict';

  angular.module('app.dashboard')
    .controller('DashboardController', function(
      $scope,
      filters, getStatisticSex, dataSex
    ){
      $scope.filters      = filters;
      $scope.personAmount = 1075;

      $scope.sex = {
        labels: ["Kobieta", "Mężczyzna"],
        data:   [dataSex.women, dataSex.men],
        colors: [ '#EF7474', '#3EAAE5' ]
      };

      $scope.age = {
        labels: [
          '0 - 10',
          '10 - 15',
          '16 - 18',
          '19 - 24'
        ],
        data: [10, 20, 33, 22],
        colors: [ '#20a8d8', '#4dbd74', '#63c2de', '#f8cb00' ]
      };

      $scope.hours = {
        labels: [
          '8:00 - 9:00',
          '9:00 - 10:00',
          '10:00 - 11:00',
          '11:00 - 12:00'
        ],
        data: [10, 20, 33, 22],
        colors: [ '#20a8d8', '#4dbd74', '#63c2de', '#f8cb00' ]
      };

      $scope.getDate = getDate;

      function getDate(filters){
        getStatisticSex(filters)
          .then(function(dataSex){
            $scope.sex.data = [dataSex.women, dataSex.men];
          })
      }
    });
}());
