describe("MovieController", function() {

    beforeEach(function() {
        module("moviesApp");
    });

    var $controller;
    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    it("will have 3 movies as the model", function() {
        var movies = [{}, {}, {}];
        var controller = $controller("MoviesController",
            { movies: movies }
        );

        expect(controller.movies.length).toBe(movies.length);
    });

    it("will not allow rating to pass 5", function () {
        var movie = { rating: 5 };
        var movies = [movie, {}, {}];
        var controller = $controller("MoviesController",
            { movies: movies }
        );

        controller.increaseRating(movie);
        expect(movie.rating).toBe(5);
    });

});