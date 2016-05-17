var app = angular.module('app', ['ngRoute', 'ui.bootstrap', "ngAnimate"])




OAuth.initialize('DwPepa-DHxsmZP-R6ytDR3ls5ZU')

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when("/", {
			templateUrl: "pages/home.html",
			controller: "MainController"
		})
		.when("/about", {
			templateUrl: "pages/about.html",
			controller: "AboutController"
		})
		.when("/contact", {
			templateUrl: "pages/contact.html",
			controller: "ContactController",
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
            $rootScope.message=params;
          	}
          	console.log($rootScope.message)
          	$location.path("/about");
        	$window.close()
        	}
      	})
		.otherwise({
			redirectTo: "/"		
		});
		//$locationProvider.html5Mode(true);
});	

app.run(function($rootScope){
	$rootScope.access_token = "hello"
});


app.controller("MainController", ['$scope', function($scope){
		$scope.message = "This is my Angular app."

}]);



app.controller("AboutController", ['$scope', function($scope){
		$scope.message = "This is about me."
}]);


app.controller("ContactController", ['$scope', function($scope){
		$scope.message = "This is how to contact me."
}]);


app.controller("LoginController", ['$scope', "$routeScope", "$location", function($scope, $routeParams, $window){

}]);
