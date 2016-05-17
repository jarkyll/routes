
var app = angular.module("app");

app.controller('CarouselCtrl', function ($scope, $http, $window, $location) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var id = '10uki80x2gckzal'
  var slides = $scope.slides = [];
  var currIndex = 0;
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://lorempixel.com/' + newWidth + '/300',
      id: currIndex++
    });
  };
  $scope.generateCSRF = function(){
    return crypto.randomBytes(18).toString('base64')
    .replace(/\//g, '-').replace(/\+/g, '_');
  }


  $scope.acquire_code = function(){
   // https://www.dropbox.com/1/oauth2/authorize?client_id=<app key>&response_type=code&redirect_uri=<redirect URI>&state=<CSRF token>
    $http.jsonp("https://api.dropboxapi.com/1/oauth2/authorize?response_type=code", {
      method: "POST"
    }).success(function(data, status, headers, config){
      console.log("here are the responses")
      console.log(data)
      console.log(status)
      console.log(headers)
      console.log(config)
    }).error(function(data, status, headers, config){
      console.log(data)
      console.log(config)
    })
  }
  $scope.auth = function() {
    $window.open('https://www.dropbox.com/1/oauth2/authorize?client_id=10uki80x2gckzal&response_type=token&redirect_uri=http://127.0.0.1:1121');
    //code = $scope.acquire_code();
   /* $http({
        method:"GET",
        url: 'https://www.dropbox.com/1/oauth2/authorize'//?client_id=<app key>&response_type=token&redirect_uri=<redirect URI>&state=<CSRF token>',
        grant_type: 'authorization_code'
    })
*/
  }

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
});