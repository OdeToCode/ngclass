describe("MovieListController", function() {

    beforeEach(function() {
        module("movies-app");
    });

    var movies = [{rating: 5}, {rating:1}];
    var listController;

    beforeEach(inject(function($controller) {
        listController = $controller("MovieListController",{
            movies:movies
        });

    }));

    it("should should not allow a movie rating over 5", function(){

        listController.increaseRating(movies[0]);

        expect(movies[0].rating).toBe(1);

    });

    it("rates a bad movie appropriately", function() {
        var result = listController.rateMovie(movies[1]);

        expect(result["good-movie"]).toBe(false);
        expect(result["bad-movie"]).toBe(true)  ;
    });

});
