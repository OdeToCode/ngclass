describe("EditController", function() {

    beforeEach(module("moviesApp"));

    var $controller, $httpBackend;
    beforeEach(inject(function(_$controller_, _$httpBackend_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
    }));


    it("Should load the movie when instantiated", function() {

        var movie = { title: "Foo" };
        $httpBackend.when("GET", "/api/movies/2").respond(movie);

        var routeParams = { id: 2 };
        var controller = $controller("EditController", {$routeParams:routeParams });

        $httpBackend.flush();
        expect(controller.movie).toEqual(movie);
    });

    it("Should not save the movie if the form is invalid", function() {
        var movie = { title: "Foo" };
        $httpBackend.when("GET", "/api/movies/2").respond(movie);

        var routeParams = { id: 2 };
        var controller = $controller("EditController", { $routeParams: routeParams });

        $httpBackend.flush();

        controller.movie.rating = 2;
        controller.save(false);

        $httpBackend.verifyNoOutstandingRequest();
    });

    it("Should POST a new movie", function() {

    });


    it("Should PUT to update an existing movie", function() {

    });

});