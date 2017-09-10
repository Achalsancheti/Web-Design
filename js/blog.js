var app = angular.module('myApp', []);

app.controller('myCtrl', 
function($scope,$http){
	$scope.save = function(){
		data = {
            'name' : $scope.name,
            'message' : $scope.message
        };

        $http.post('http:localhost/blog.php', data)
    .then(function (response) {
		alert("ok");
	});}
});	