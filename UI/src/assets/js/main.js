


// create the module and name it scotchApp
var moeDemo = angular.module('moeDemo', ['ngRoute']);

// configure our routes
moeDemo.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'summary.html',
    })

    .when('/summary', {
      templateUrl : 'summary.html',
    })

    // route for the about page
    .when('/services', {
      templateUrl : 'home/services.html',
    })

    .when('/recognition', {
      templateUrl : 'home/recognition.html',
    });
});
