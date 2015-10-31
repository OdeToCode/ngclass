describe("The List Controller", function() {

    beforeEach(function() {
        module("atTheMovies");
    });

    var $controller, $httpBackend;
    beforeEach(inject(function(_$controller_, _$httpBackend_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;

    }));

    it("should be a controller I can get to", function () {



        var controller = $controller("ListController");
        expect(controller).toBeDefined();
    });

    it("should start with 3 movies", function () {

        $httpBackend.when("GET", "/api/movies/").respond([{}, {}, {}]);
        var controller = $controller("ListController");

        $httpBackend.flush();
        expect(controller.movies.length).toBe(3);
    });



});