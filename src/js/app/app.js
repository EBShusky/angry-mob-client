(function(){
  'use strict';

  angular.module('app', [
    'ui.router',
    'LocalStorageModule',
    'chart.js',
    // Own modules
    'templates',
    'app.dashboard'
  ]);
}());
