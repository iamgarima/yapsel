(function(){
	angular
		.module('home')
		.directive('header', function(){
			return {
				restrict: 'E',
				templateUrl: 'header.html',
				scope: {
					logo: '=',
          headerImage: '=',
          sellerName: '=',
          sellerInfo: '=',
          followers: '=',
          soldItems: '='
				}
			};
		});
})();