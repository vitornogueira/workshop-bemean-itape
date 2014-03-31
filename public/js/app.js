'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives'
]);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/beers', {
      templateUrl: 'expose/beers/index',
      controller: 'BeerIndexController'
    }).
    when('/beers/create', {
      templateUrl: 'expose/beers/create',
      controller: 'BeerCreateController'
    }).
    when('/beers/:id', {
      templateUrl: 'expose/beers/update',
      controller: 'BeerUpdateController'
    }).
    otherwise({
      redirectTo: '/beers'
    });

  $locationProvider.html5Mode(true);
});
