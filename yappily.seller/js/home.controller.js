(function(){
	angular
		.module('home')
		.controller('HomeCtrl', function($scope, $http){
			$http.get('http://localhost:5000/')
					 .then(function(response){
					 		$scope.sellerData = response.data;
					 });
		});
})();