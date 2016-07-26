(function(){
	angular
		.module('home')
		.directive('categoryBar', function(){
			return {
				restrict: 'E',
				templateUrl: 'categoryBar.html',
				scope: {
					sellerTags: '='
				}
			};
		});
})();