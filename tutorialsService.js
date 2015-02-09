var app = angular.module("TutorialsApp", []);

app.service("tutorialsService", function($http, $q)
{
  var deferred = $q.defer();
  $http.get('tutorials.json').then(function (data)
  {
    deferred.resolve(data);
  });

  this.getInformatives = function ()
  {
    return deferred.promise;
  }
})

.controller("tutorialsCtrl", function ($scope, tutorialsService)
{
  var promise = tutorialsService.getInformatives();
  promise.then(function (data)
  {
    $scope.informatives = data.data;
    console.log($scope.informatives);
  });
})
