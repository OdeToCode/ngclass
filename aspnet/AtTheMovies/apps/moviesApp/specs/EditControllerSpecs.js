describe("EditController", function() {

    beforeEach(function() { module("moviesApp"); });

    var $controller, $httpBackend;
    beforeEach(inject(function(_$controller_, _$httpBackend_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
       
    });


    it("should retrieve the movie by ID", function () {
        var movie = { title: "foo", rating: 5 };
        $httpBackend.when("GET", "/api/movies/3").respond(movie);

        var controller = $controller("EditController", {
            $routeParams: { id: 3 }
        });

        $httpBackend.flush();

        expect(controller.movie).toEqual(movie);
    });

});