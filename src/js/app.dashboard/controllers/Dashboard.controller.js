(function(){
  'use strict';

  angular.module('app.dashboard')
    .controller('DashboardController', function(
      $scope,
      filters, getStatisticSex, dataSex, getStatisticAge, dataAge
    ){
      $scope.filters      = filters;
      $scope.personAmount = 1075;

      setSexData(dataSex);
      setAgeData(dataSex);

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

      /**
       *
       * @param data
       */
      function setSexData(data){
        $scope.sex = {
          labels: ["Kobieta", "Mężczyzna"],
          data:   [data.Female, data.Male],
          colors: [ '#EF7474', '#3EAAE5' ]
        };
      }

      /**
       *
       * @param data
       */
      function setAgeData(data){
        data = {
          '0': 1,
          '1': 2,
          '2': 3,
          '3': 4,
          '4': 5,
          '5': 6,
          '6': 7,
          '7': 0,
          '8': 0,
          '9': 10,
          '10': 10
        };
        var range = [5, 10, 15, 18, 24, 30, 40, 50, 60, 100];
        var actual = range[0];

        // data.forEach(function(item, key){
        //   if(item)
        // });

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
      }

      /**
       *
       * @param filters
       */
      function getDate(filters){
        getStatisticSex(filters)
          .then(setSexData);

        getStatisticAge(filters)
          .then(setAgeData);
      }
    });
}());
