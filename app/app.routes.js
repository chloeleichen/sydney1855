oldSydney.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/', {
      templateUrl: 'app/main/main.html',
      controller: 'mainController'
    }).
    when('/about', {
      templateUrl: 'app/about/about.html'
    }).
    when('/contact', {
      templateUrl: 'app/contact/contact.html'
    }).
    otherwise({
      redirectTo: '/'
    });

}]);
