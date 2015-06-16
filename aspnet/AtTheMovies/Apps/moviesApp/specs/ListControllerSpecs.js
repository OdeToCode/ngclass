describe("ListController", function() {

    beforeEach(function() {
        module("moviesApp");
    });

    var listController = null;
    beforeEach(inject(function($controller) {
        var movies = [{}, {}, {}];

        listController = $controller("ListController", {
            movies: movies
        });

    }));

    it("it should make movies availalbe for binding", function() {
        expect(listController.movies.length).toBe(3);
    });

    it("it should wrap around a rating increase when rating is 5", function() {
        var movie = { rating: 5 };
        listController.increaseRating(movie);

        expect(movie.rating).toBe(1);

    });

    it("it should increase the rating by one when rating is 4", function() {

        var movie = { rating: 4 };
        listController.increaseRating(movie);

        expect(movie.rating).toBe(5);

    });

});