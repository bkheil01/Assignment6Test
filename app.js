var app = angular.module("TutorialsApp", []);

app.service("tutorialsService", function($http, $q)
{
  var deferred = $q.defer();
  $http.get('tutorials.json').then(function (data)
  {
    deferred.resolve(data);
  });

  this.getTutorials = function ()
  {
    return deferred.promise;
  }
})

.controller("tutorialsCtrl", function ($scope, tutorialsService)
{
  var promise = tutorialsService.getTutorials();
  promise.then(function (data)
  {
    $scope.tutorial = data;
    console.log($scope.tutorial);
  });
})
