var app = angular.module('app', ['ngRoute', 'ui.bootstrap', "ngAnimate"]);




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
		.when("/access_token=:access_token",{
			controller: 'LoginController'
		})
		.otherwise({
			redirectTo: "/"		
		});
		$locationProvider.html5Mode(true)
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


app.controller("LoginController", ['$scope', "$routeParams", "$window", function($scope, $routeParams, $window){
		console.log($routeParams)
		var $parentscope = $window.opener.angular.element(window.opener.document).scope();
		if(angular.isDefined($routeParams.access_token)) {
    		parentscope.$broadcast("igAccessTokenObtained",
     			{ access_token: $routeParams.access_token
     		})
   		}
   	console.log("hello")
    $window.close();
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
}]);