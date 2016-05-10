var app = angular.module('app', ['ngRoute', 'ui.bootstrap', "ngAnimate"]);


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
		.otherwise({
			redirectTo: "pages/home.html"
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