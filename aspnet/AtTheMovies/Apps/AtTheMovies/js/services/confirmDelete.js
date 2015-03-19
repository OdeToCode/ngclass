(function(module) {

    var confirmDelete = function($modal) {
        return function(movie) {
            var dialog = $modal.open({
                templateUrl: "/apps/AtTheMovies/templates/deleteMovie.html",
                controller: function () {
                    var model = this;
                    model.movie = movie;
                },
                controllerAs: "modal"
            });
            return dialog.result;
        };
    };

    module.factory("confirmDelete", confirmDelete);

}(angular.module("moviesApp")));