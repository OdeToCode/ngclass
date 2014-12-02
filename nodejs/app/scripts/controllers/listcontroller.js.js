'use strict';

/**
 * @ngdoc function
 * @name ngclassApp.controller:ListcontrollerJsCtrl
 * @description
 * # ListcontrollerJsCtrl
 * Controller of the ngclassApp
 */
angular.module('ngclassApp')
  .controller('ListcontrollerJsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
