var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/polyquiz", {
      templateUrl: "/Asignment/polyquiz/Main.html",
    })
    .when("/quiz/:id/:name", {
      templateUrl: "/Asignment/polyquiz/quiz-template.html",
    })
    .otherwise({
      templateUrl: "/Asignment/polyquiz/Main.html",
    });
});

//điều khiển trạn thái khi tải
app.run(function ($rootScope) {
  $rootScope.$on("$routeChangeStart", function () {
    $rootScope.loading = true;
  });
  $rootScope.$on("$routeChangeSuccess", function () {
    $rootScope.loading = false;
  });
  $rootScope.$on("$routeChangeError", function () {
    $rootScope.loading = false;
    alert("Lỗi, không tải được template");
  });
});
app.controller("layoutCtrl", function ($scope, $rootScope, $http) {
  $rootScope.students = [];
  $rootScope.idMonHoc = "";
  $rootScope.student = [];
  $rootScope.isLogin = false;
  //getUser
  $http.get("../Utilities/db/Students.js").then(function (respone) {
    $rootScope.students = respone.data;
    console.log($rootScope.students);
  });

  $rootScope.login = function () {
    // kiểm tracó tồn tại tài khoàn k
    if (
      !$rootScope.students.some(
        (student) => student.username == $rootScope.student.username
      )
    ) {
      alert("Tài khoản không tồn tại");
      return;
    } else {
      // kiểm tra đúng sai tài khoản mật khẩu
      var checkCorect = false;
      $rootScope.students.forEach(s => {
        if(s.username == $rootScope.student.username && s.password == $rootScope.student.password){
          checkCorect = true;
          alert("Đăng nhập thành công");
          $rootScope.student = s;
          console.log(s);
        }
      });
      if(!checkCorect){
        alert("Tài khoản hoặc mật khẩu không chính xác");
        return;
      }
    }
  };
  $rootScope.logout = function () {
    // kiểm tra
  };
  $rootScope.register = function () {
    // kiểm tra
  };
  $rootScope.fogot = function () {
    // kiểm tra
  };
  $rootScope.changePass = function () {
    // kiểm tra
  };
});
//course controller
// app.controller("courseCtrl", function ($scope, $http) {
//   $scope.courses = [];
//   $http.get("../Utilities/db/Subjects.js").then(function (respone) {
//     $scope.courses = respone.data;
//     console.log($scope.courses);
//   });
//   $scope.begin = 0;
//   $scope.searchString = "";
//   $scope.page = function (index) {
//     $scope.searchString = "";
//     $scope.begin = 4 * index;
//   };
//   $scope.search = function (id, index) {
//     $scope.searchString = id;
//     $scope.begin = index;
//   };
// });
