var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
  .when("/home",{
    templateUrl: "home.html",
  })
  .when("/about",{
    templateUrl: 'about.html',
  })
  .when("/contact",{
    templateUrl: "contact.html",
  })
  .when("/feedback",{
    
  })
  .when("/qa",{
    
  })
  .when("/account",{
    
  })
  .when("/account/login",{
    
  })
  .when("/account/forgot",{
    
  })
  .when("/account/register",{
    
  })
  .when("/account/logout",{
    
  })
  .when("/account/change",{
    
  })
  .when("/account/profile",{
    
  })
  .when("/account/orders",{
    
  })
  .when("/account/products",{
    
  })
  .when("/category/:id",{
    templateUrl: "/lab/Lab3/detail.html",
    controller: "categoryCtrl"
  })
  .when("/supplier/:id",{
    templateUrl: "/lab/Lab3/detail.html",
    controller: "supplierCtrl"
  })
  .when("/special/:id",{
    templateUrl: "/lab/Lab3/detail.html",
    controller: "specialCtrl"
  })
  .otherwise({
    redirectTo: "/home"
  })
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
