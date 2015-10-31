(function(module) {
    
    function confirmDeleteMovie($modal) {
        return function(movie) {
            var dialog = $modal.open({
                templateUrl: "/apps/movies/list/delete.html",
                controller: function ($scope) {
                    $scope.movie = movie;
                }
            });

            return dialog.result;
        }
    }

    module.factory("confirmDeleteMovie", confirmDeleteMovie);

}(angular.module("atTheMovies")))