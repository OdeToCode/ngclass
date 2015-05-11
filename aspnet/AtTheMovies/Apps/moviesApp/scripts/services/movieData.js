(function (module) {


    var movieData = function () {

        var getAll = function () {
            return [
                { title: "Star Wars", year: 1979, rating: 5 },
                { title: "E.T.", year: 1982, rating: 4 },
                { title: "Fast and Furious 7", year: 2015, rating: 2 }
            ];
        };

        return {
            getAll: getAll
        };
    };

    module.factory("movieData", movieData);

}(angular.module("moviesApp")));