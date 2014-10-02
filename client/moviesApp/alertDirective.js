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
        // return directive definition object

        // <alert> E
        // <div alert>
        // <div class="alert">


        return {
            restrict: "EA",
            templateUrl: "moviesApp/alertTemplate.html",
            transclude: true,
            scope: {
                type: "=",
                count: "@",
                reason: "=",
                close: "&"
            }
            //link: function(scope, element, attributes) {

            // scope.$watch("reason", function(newVal, oldVal) {
                //element.addClass()
            //}
        //

            //    var type = attributes.type || "warning";
            //    var child = element.children("div");
            //    child.addClass("alert");
            //    child.addClass("alert-" + type);

            //    scope.onclose = function() {
            //        
            //        scope.type
            //element.remove();
            //    };

            //    var button = element.find("input");
            //    button.on("click", scope.onclose);
            //}
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