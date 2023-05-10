//course controller
// var app = angular.module("myApp", ["ngRoute"]);
app.controller("courseCtrl", function ($scope, $http,$rootScope) {
    $scope.courses = [];
    $http.get("../Utilities/db/Subjects.js").then(function (respone) {
      $scope.courses = respone.data;
      console.log($scope.courses);
    });
    $scope.begin = 0;
    $scope.searchString = "";
    $scope.page = function (index) {
      $scope.searchString = "";
      $scope.begin = 4 * index;
    };
    $scope.search = function (id, index) {
      $scope.searchString = id;
      $scope.begin = index;
    };
    $rootScope.getMonHoc = function (id) {
      $rootScope.idMonHoc = id;
      console.log($rootScope.idMonHoc);
      }
  });