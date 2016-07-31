(function(){
	angular
		.module('home')
		.directive('item', function(){
			return {
				restrict: 'E',
				templateUrl: 'template/item.html',
				scope: {
					sellerItem: '='
				},
				link: function(scope){
					scope.noColor = true;
					scope.incLike = function(){
						scope.like += 1;
						scope.noColor = false;
					}
					scope.decLike = function(){
						scope.like -= 1;
						scope.noColor = true;
					}
				}
			};
		});
})();