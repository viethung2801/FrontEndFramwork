// var app = angular.module("myApp", []);
app.controller("quizCtrl", function ($scope, $http, $interval,$rootScope) {
  $scope.quesions = [];
  $scope.lamBai = false;
  $scope.minute = 10;
  $scope.second = 00;
  $scope.numQuesion = -1;
  $scope.quesion = [];
  $scope.point = -1;
  //lấy ra các câu hỏi
  $http.get("../Utilities/db/Quizs/"+$rootScope.idMonHoc+".js").then(function (respone) {
    $scope.quesions = respone.data;
  });
  //bắt đầu làm
  $scope.start = function () {
    $scope.lamBai = true;
    //đếm ngược thời gian
    $scope.countdown();
    //hiển thị câu hỏi
    $scope.getQuesion();
    $scope.point = 0;
    $scope.minute = 10;
    $scope.second = 00;
    $scope.numQuesion = 1;
  };
  //kết thúc làm
  $scope.reset = function () {
    //đóng form
    $scope.lamBai = false;
    //reset lại thời gian
    $interval.cancel($scope.countdownInterval);
  };

  $scope.countdown = function () {
    var time = 600;
    $scope.countdownInterval = $interval(function () {
      $scope.minute = Math.floor(time / 60); // Lấy phần nguyên của phép chia
      $scope.second = time % 60; // Lấy phần dư của phép chia

      if (time <= 0) {
        $interval.cancel($scope.countdownInterval); // Dừng đếm ngược nếu hết thời gian
        var modal = new bootstrap.Modal(document.getElementById("result"));
        modal.show();
      }

      time--; // Giảm thời gian còn lại sau mỗi giây
    }, 1000); // Cập nhật thời gian sau mỗi giây (1000 ms)
  };

  $scope.getQuesion = function () {
    $scope.numQuesion++;
    $scope.quesion =
      $scope.quesions[Math.floor(Math.random() * $scope.quesions.length - 1)];
  };

  $scope.check = function () {
    // kiểm tra trong 10 câu
    if ($scope.numQuesion == 10) {
      alert("Bạn đã hoàn thành Quiz này !!!");
      return;
    }

    var ans = document.getElementsByName("answer");
    var chooser = false;
    //kiểm tra có chọn đáp án k
    for (var i = 0; i < ans.length; i++) {
      //lấy ra đáp án được chọn
      if (ans[i].checked) {
        // kiểm tra đã chọn
        chooser = true;
        //kiểm tra đúng sai
        if (ans[i].value == $scope.quesion.AnswerId) {
          $scope.point++;
        }
        $scope.getQuesion();
      }
    }
    if (!chooser) {
      alert("Bạn chưa chọn đáp án");
      return;
    }
  };
});
