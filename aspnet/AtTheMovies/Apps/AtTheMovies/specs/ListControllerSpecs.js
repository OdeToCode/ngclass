describe("ListController", function() {

    beforeEach(function() {
        module("moviesApp");
    });

    var $controller, movieService;
    beforeEach(inject(function(_$controller_, _movieService_) {
        $controller = _$controller_;
        movieService = _movieService_;
    }));


    it("shoudl have injected movieservice", function() {
        expect(movieService).toBeDefined();
    });

    it("Can create the controller", function () {
        var movies = [{}, {}];
        var controller = $controller("ListController", {movies:movies});

        expect(controller).toBeDefined();
    });

    it("Will make the movies available", function () {
        var movies = [{}, {}, {}];

        var controller = $controller("ListController", { movies: movies });

        expect(controller.movies.length).toBe(3);
    });

    it("Wrap a rating when trying to increment the highest rrating", function () {
        var movies = [{ rating:5}];
        var controller = $controller("ListController", { movies: movies });

        controller.increaseRating(movies[0]);

        expect(movies[0].rating).toBe(1);
    });

});