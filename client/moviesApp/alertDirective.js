(function() {

    var app = angular.module("moviesApp");

    app.directive("startwiths", function($log, $http) {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attributes, ngmodel) {
                ngmodel.$validators.startwiths = function(value) {
                    $log.info("startwiths called with " + value);
                    if (value && value[0] === 'S') {
                        return true;
                    }
                    return false;
                };
            }
        };
    });


    var alert = function() {
        return {
            restrict: "EA",
            templateUrl: "moviesApp/alertTemplate.html",
            transclude: true,
            scope: {
                type: "=",
                reason: "=",
                close: "&"
            }
        };
    };


    app.directive("puAlert", alert);

    app.directive('contenteditable', function () {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, element, attrs, ngModel) {
                if (!ngModel) return;

                ngModel.$render = function () {
                    element.html(ngModel.$viewValue || '');
                };

                element.on('blur keyup change', function () {
                    scope.$apply(read);
                });
                ngModel.$render();

                function read() {
                    var html = element.html();
                    if (attrs.stripBr && html == '<br>') {
                        html = '';
                    }
                    ngModel.$setViewValue(html);
                }
            }
        };
    });

}());