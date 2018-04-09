'use strict';

// Declare app level module which depends on views, and components
angular.module('BookLibrary', [
  'ngRoute',
  'ui.bootstrap'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  // default view
  $routeProvider.otherwise({ redirectTo: '/' });

  // setup routes if we have multiple views
  $routeProvider.when('/', {
      templateUrl: './views/Home.html',
      controller: 'HomeCtrl'
  });

}])
.controller('AppController', [ '$scope','$http', function ($scope,$http) {
  // can place global scope functions here
}]);
