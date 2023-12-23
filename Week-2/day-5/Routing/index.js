var app=angular.module("app",['ngRoute'])

app.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'login.html',
        controller: 'logCtrl'
      })
      .when('/register', {
        templateUrl: 'register.html',
        controller: 'regCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  