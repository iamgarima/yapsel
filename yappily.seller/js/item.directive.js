(function(){
	angular
		.module('home')
		.directive('item', function(){
			return {
				restrict: 'E',
				templateUrl: 'item.html',
				scope: {
					sellerItem: '='
				}
			};
		});
})();