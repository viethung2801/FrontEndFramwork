var app = angular.module("myApp", []);

app.controller("formCtrl", function ($scope) {
  //thêm
  $scope.$parent.add = function () {
    $scope.$parent.students.push($scope.student);
    $scope.$parent.new();
  };
  //sửa
  $scope.$parent.update = function () {
    $scope.$parent.students[$scope.$parent.index] = $scope.student;
    console.log($scope.$parent.students);
  };

  //xóa
  $scope.$parent.delete = function () {
    //splice xóa hoặc thêm
    //splice(index, 1, object):xóa phần tử ở vị trí index và có xóa phần tử hay không và có thêm phần tử hay k
    $scope.$parent.students.splice($scope.$parent.index, 1);
    $scope.$parent.new();
  };
  //hủy
  $scope.$parent.cancel = function () {
    $scope.$parent.student = $scope.$parent.students[$scope.$parent.index];
  };
  //mới
  $scope.$parent.new = function () {
    $scope.$parent.student = {};
    $scope.$parent.index = -1;
  };
});
app.controller("tableCtrl", function ($scope) {
  $scope.$parent.students = [
    {
      name: "Dương Việt Hùng",
      date: "30-01-2003",
      point: 10,
    },
    {
      name: "Nguyễn Văn A",
      date: "20-03-2023",
      point: 5.5,
    },
  ];
  $scope.$parent.index = -1;
  $scope.$parent.edit = function (index) {
    $scope.$parent.index = index;
    $scope.$parent.student = angular.copy($scope.$parent.students[index]);
  };
});
