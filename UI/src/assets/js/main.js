


// create the module and name it scotchApp
var moeDemo = angular.module('moeDemo', ['ngRoute']);

// configure our routes
moeDemo.config(function($routeProvider, $locationProvider) {
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
    })
    .otherwise({
                   redirectTo: '/'
               });
                // use the HTML5 History API
                $locationProvider.html5Mode(true);
});


$('.page-nav-zone').hover(
       function(){ $(this).addClass('.page-nav') }

);

jQuery.address.change(function(event) {
    if (event.value) {
        // remove active class on all nav links
        $(".page-nav-zone .page-nav-wrapper #nav ul li a").removeClass("active");
        // get current link and add active class to it
        $(".page-nav-zone .page-nav-wrapper #nav ul li a").each(function() {
            var dataPath = jQuery(this).attr("href").replace(
                base, 'http://localhost:3000');
            $(this).attr("data-path", dataPath);
            if (dataPath == (event.value)) {
                $(this).addClass("active");
            }
        });
    }
});
