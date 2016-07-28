(function(){
	angular
		.module('home')
		.directive('footer', function(){
			return{
				restrict: 'E',
				templateUrl: 'template/footer.html',
				scope: {}
			};	
		});
})();