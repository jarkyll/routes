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
          	console.log($rootScope.access_token)
          	$location.path("/");
          	//$window.close()
        	}
      	})
		.otherwise({
			redirectTo: "/"		
		});
		$locationProvider.html5Mode(true);
});	

app.run(function($rootScope){
	//$rootScope.access_token = "hello"
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


app.controller("LoginController", ['$scope', function($scope){
			$scope.login = function(){
			alert("hello")
			var client_id = "10uki80x2gckzal"
			var response_type = "token"
			var redirect_uri = "http://127.0.0.1:1121"
			var url = 'https://www.dropbox.com/1/oauth2/authorize?client_id=' + client_id + "&response_type=" + response_type + '&redirect_uri=' + redirect_uri;
			//$window.open('https://www.dropbox.com/1/oauth2/authorize?client_id=10uki80x2gckzal&response_type=token&redirect_uri=http://127.0.0.1:1121');
			console.log("login is working")
			window.location.replace(url)
			// instead of opening a new tab, we are opening on the current tab and redirecting back
		};


		//add the api call list folders and make it so a table with the list of names pops up.
}]);


app.controller("HeaderController", ['$scope', '$location', function($scope, $location){
		$scope.isActive = function(location){
			return location === $location.path()
		}

}]);