/* Controllers */
var demoAppControllers = angular.module('demoApp.controllers', ['demoApp.services']);

demoAppControllers.controller('navbarCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.highlight = function (path) {
        return $location.path().substr(0, path.length) == path;
    };
}]);

demoAppControllers.controller('newsCtrl', ['$scope','newsData',function($scope, newsData) {
    $scope.news = newsData.query();
    //console.log($scope.news);

}]);

demoAppControllers.controller('staffCtrl', [function() {
}]);

demoAppControllers.controller('salaryCtrl', [function() {
}]);

demoAppControllers.controller('docflowCtrl', [function() {
}]);


demoAppControllers.directive('autoActive', ['$location', function ($location) {
    return {
        restrict: 'A',
        scope: false,
        link: function (scope, element) {
            function setActive() {
                var path = $location.path();
                if (path) {
                    angular.forEach(element.find('li'), function (li) {
                        var anchor = li.querySelector('a');
                        if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                            angular.element(li).addClass('active');
                        } else {
                            angular.element(li).removeClass('active');
                        }
                    });
                }
            }

            setActive();

            scope.$on('$locationChangeSuccess', setActive);
        }
    };
}]);