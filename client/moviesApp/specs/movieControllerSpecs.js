describe("the MainController", function() {

    beforeEach(module("moviesApp"));


    var $controller, $httpBackend, appConfig;
    beforeEach(inject(function(_$controller_, _$httpBackend_, _appConfig_) {

        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        appConfig = _appConfig_;

    }));


    it("should not allow a movie rating to exceed 5", function() {
        var movie = { rating: 5 };
        var controller = $controller("MainController");
        controller.increaseRating(movie);
        expect(movie.rating).toBe(1);
    });

    //it("should populate error message if server is down", function () {
    //    $httpBackend.when("GET", appConfig.moviesEndpoint)
    //                .respond(404);
    //    var controller = $controller("MainController");
    //    $httpBackend.flush();

    //    expect(controller.movies.length).toBe(0);
    //    expect(controller.error).toBeTruthy();
    //});

    it("should retrieve movies when constructed", function() {
        $httpBackend.when("GET", appConfig.moviesEndpoint)
                    .respond([{}, {}, {}]);
        var controller = $controller("MainController");
        $httpBackend.flush();

        expect(controller.movies.length).toBe(3);
    });


});