var app = angular.module("app", ['ngRoute'])
app.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '../Login/login.html',
        controller: 'loginCtrl'

    }).when('/register', {
        templateUrl: '../Register/register.html',
        controller: 'registerCtrl'
    }).when('/dashboard/:name', {
        templateUrl: '../Dashboard/dashboard.html',
        controller: 'dashboardCtrl'
    })
        .otherwise({
            redirectTo: "/"
        });
})