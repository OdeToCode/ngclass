(function(module) {

    var confirmDeletion = function($modal) {
        return function(movie) {
            var dialog = $modal.open({
                templateUrl: "/apps/moviesapp/templates/delete.html",
                controller: function($scope) {
                    $scope.movie = movie;
                }
            });
            return dialog.result;
        };
    };

    module.factory("confirmDeletion", confirmDeletion);


}(angular.module("moviesApp")));