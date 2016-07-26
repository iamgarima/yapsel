(function(){
	angular
		.module('home')
		.directive('footer', function(){
			restrict: 'E',
			templateUrl: 'footer.html',
			scope: {}
		});
})();