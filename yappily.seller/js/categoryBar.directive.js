(function(){
	angular
		.module('home')
		.directive('categoryBar', function(){
			return {
				restrict: 'E',
				templateUrl: 'template/categoryBar.html',
				scope: {
					sellerTags: '='
				}
			};
		});
})();