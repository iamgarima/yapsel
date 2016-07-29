(function(){
	angular
		.module('home')
		.directive('header', function(){
			return {
				restrict: 'E',
				templateUrl: 'template/header.html',
				scope: {
					  logo: '=',
			          headerImage: '=',
			          sellerName: '=',
			          sellerInfo: '=',
			          followers: '=',
			          soldItems: '=',
			          rating: '='
				},
				link: function(scope){
					scope.showFollow = true;
					scope.incFollow = function(){
						scope.followers += 1;
						scope.showFollow = false;
					}
					scope.decFollow = function(){
						scope.followers -= 1;
						scope.showFollow = true;
					}
				}
			};
		});
})();