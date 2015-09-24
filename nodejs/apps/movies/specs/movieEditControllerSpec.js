describe("MovieEditController", function() {


    beforeEach(module("movies-app"));

    var $controller;
    var $httpBackend;
    var movie = { id: 94};

    beforeEach(inject(function(_$controller_, _$httpBackend_){
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
    }));


    it("fetches the movie by id when initializing", function(){

        $httpBackend.when("GET", "/api/movies/94").respond(movie);

        var editController =
            $controller("MovieEditController",{
                $routeParams: { id: 94 }
            });

        $httpBackend.flush();

        expect(editController.movie.id).toBe(94);

    });


});
