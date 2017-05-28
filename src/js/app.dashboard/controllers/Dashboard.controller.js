(function(){
  'use strict';

  angular.module('app.dashboard')
    .controller('DashboardController', function(
      $scope,
      DataGrouper,
      filters,
        getStatisticSex, dataSex,
        getStatisticAge, dataAge,
        getStatisticHours, dataHours,
        getStatisticEmotions, dataEmotions,
        getStatisticPeopleQuantity, dataPeopleQuantity
    ){
      $scope.filters      = filters;
      $scope.personAmount = dataPeopleQuantity;
      $scope.getDate      = getDate;

      setSexData(dataSex);
      setAgeData(dataAge);
      setHoursData(dataHours);
      setEmotionData(dataEmotions);

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
        var labels = Object.keys(data);
        var result = labels.map(function(item){
          return data[item];
        });

        $scope.age = {
          labels: labels,
          data: result,
          colors: [ '#20a8d8', '#4dbd74', '#63c2de', '#f8cb00' ]
        };
      }

      /**
       *
       * @param data
       */
      function setEmotionData(data){
        var labels = Object.keys(data);
        var result = labels.map(function(item){
          return data[item];
        });

        $scope.emotions = {
          labels: labels,
          data: result,
          colors: [ '#20a8d8', '#4dbd74', '#63c2de', '#f8cb00' ]
        };
      }

      /**
       *
       * @param data
       */
      function setHoursData(data){
        var result = [];
        for(var i = 0; i < 24; i++){
          result[i] = data[i] || 0;
        }

        $scope.hours = {
          labels: [
            '0:00 - 1:00',
            '1:00 - 2:00',
            '2:00 - 3:00',
            '3:00 - 4:00',
            '4:00 - 5:00',
            '5:00 - 6:00',
            '6:00 - 7:00',
            '7:00 - 8:00',
            '8:00 - 9:00',
            '9:00 - 10:00',
            '10:00 - 11:00',
            '11:00 - 12:00',
            '12:00 - 13:00',
            '13:00 - 14:00',
            '14:00 - 15:00',
            '15:00 - 16:00',
            '16:00 - 17:00',
            '17:00 - 18:00',
            '18:00 - 19:00',
            '19:00 - 20:00',
            '20:00 - 21:00',
            '21:00 - 22:00',
            '22:00 - 23:00',
            '23:00 - 24:00'
          ],
          data: result,
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

        getStatisticHours(filters)
          .then(setHoursData);

        getStatisticPeopleQuantity(filters)
          .then(function(peopleQuantity){
            $scope.personAmount = peopleQuantity;
          })
      }
    });
}());
