var app = angular.module('app', ['ngRoute', 'ui.bootstrap', "ngAnimate"])



app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when("/", {
			templateUrl: "pages/home.html",
			controller: "MainController",
			activetab: ""
		})
		.when("/about", {
			templateUrl: "pages/about.html",
			controller: "AboutController",
			activetab: "about"
		})
		.when("/contact", {
			templateUrl: "pages/contact.html",
			controller: "ContactController",
			activetab: "contact",
			requireToken: true
		})
		.when('/access_token=:accessToken', {
        template: 'pages/home.html',
        controller: function ($location,$rootScope,$window) {
          var hash = $location.path().substr(1);

          var splitted = hash.split('&');
          var params = {};

          for (var i = 0; i < splitted.length; i++) {
            var param  = splitted[i].split('=');
            var key    = param[0];
            var value  = param[1];
            params[key] = value;
            $rootScope.access_token=params;
          	}
          	console.log($rootScope.message)
          	$location.path("/about");
          	$window.close()
        	}
      	})
		.otherwise({
			redirectTo: "/"		
		});
		$locationProvider.html5Mode(true);
});	

app.run(function($rootScope){
	$rootScope.access_token = "hello"
});


app.controller("MainController", ['$scope', '$route', function($scope, $route){
		$scope.message = "This is my Angular app."
		$scope.route = $route
}]);



app.controller("AboutController", ['$scope', '$route', function($scope, $route){
		$scope.message = "This is about me."
		$scope.route = $route
}]);


app.controller("ContactController", ['$scope', '$route', function($scope, $route){
		$scope.message = "This is how to contact me."
		$scope.route = $route
}]);


app.controller("LoginController", ['$scope', "$routeScope", "$location", function($scope, $routeParams, $window){

}]);
