describe("The MainController", function() {

    beforeEach(function() {
        module("moviesApp");
    });

    var mainController;
    var movies = [{}, {}, {}];
    beforeEach(inject(function($controller) {
        mainController = $controller("MainController", {
            movies: movies
        });
    }));

    it("can rate movies", function() {
        movies[0].rating = 1;
        movies[1].rating = 5;

        var result = mainController.rateMovie(movies[0]);
        expect(result.good).toBe(false);
        expect(result.bad).toBe(true);

        result = mainController.rateMovie(movies[1]);
        console.log(result);
        expect(result.good).toBe(true);
        expect(result.bad).toBe(false);
    });

    it("can be created with movies", inject(function() {
        expect(mainController.movies.length).toBe(3);
    }));

    it("initializes searchTerm and ordering", inject(function () {
        expect(mainController.searchTerm).toBe("");
    }));

});