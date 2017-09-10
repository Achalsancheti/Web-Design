var app = angular.module('myApp', []);

app.controller('myCtrl', 
function($scope,$http){
	$scope.save = function(){
		data = {
            'name' : $scope.firstName + " "+$scope.lastName,
            'email' : $scope.email,
			'file':'files/Resume.pdf'
        };

        $http.post('http:localhost/admissions.php', data)
    .then(function (response) {
		alert("ok");
	});}
});	