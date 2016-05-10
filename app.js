var app = angular.module('app', ['ngRoutes']);


app.controller("MainController", ['$scope', function("$scope"){
		$scope.message = "This is my Angular app."
}]);