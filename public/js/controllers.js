'use strict';

/* Controllers */

var app = angular.module('myApp.controllers', []);

app.controller('BeerCreateController', function ($scope, $http) {
  $scope.msg = 'Cadastro de Cerveja';

  $scope.create = function (data) {
    var url = '/api/beers';

    $http({
      method: 'POST',
      url: url,
      data: data
    }).
    success(function (data, status, headers, config) {
      $scope.msg = data.name + ' cadastrado com sucesso!';
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });
  };
});

app.controller('BeerIndexController', function ($scope, $http) {
  $scope.msg = 'Listagem de Cerveja';

  var url = '/api/beers';

  $http({
    method: 'GET',
    url: url
  }).
  success(function (data, status, headers, config) {
    $scope.beers = data;
  }).
  error(function (data, status, headers, config) {
    $scope.name = 'Error!';
  });

  $scope.delete = function(beer) {
    url = '/api/beers/' + beer._id;

    var del = confirm('Deseja excluir a cerveja ' + beer.name + '?');

    if (del) {
      $http({
        method: 'DELETE',
        url: url
      }).
      success(function (data, status, headers, config) {
          var index = $scope.beers.indexOf(beer);

          $scope.beers.splice(index, 1);
      }).
      error(function (data, status, headers, config) {
        $scope.name = 'Error!';
      });
    }
  };
});

app.controller('BeerUpdateController', function ($scope, $http, $routeParams) {
  $scope.msg = 'Listagem de Cerveja';

  var url = '/api/beers/' + $routeParams.id;

  $http({
    method: 'GET',
    url: url
  }).
  success(function (data, status, headers, config) {
    $scope.beer = data;
  }).
  error(function (data, status, headers, config) {
    $scope.name = 'Error!';
  });

  $scope.update = function (data) {

    delete data._id;

    $http({
      method: 'PUT',
      url: url,
      data: data
    }).
    success(function (data, status, headers, config) {
      $scope.msg = data.name + ' atualizada com sucesso!';
    }).
    error(function (data, status, headers, config) {
      $scope.name = 'Error!';
    });
  };
});
