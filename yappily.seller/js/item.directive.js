(function(){
	angular
		.module('home')
		.directive('item', function(){
			return {
				restrict: 'E',
				templateUrl: 'template/item.html',
				scope: {
					sellerItem: '='
				}
			};
		});
})();