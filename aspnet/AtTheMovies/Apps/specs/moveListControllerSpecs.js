describe("The movieListController", function() {

    beforeEach(function() {
        // module is from angular-mocks
        module("moviesApp");
    });

    // inject is from angular mocks
    var $controller, $httpBackend, alerting, movies;
    beforeEach(inject(function(_$controller_, _$httpBackend_, _alerting_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        alerting = _alerting_;
        movies = [{}, {}, {}];
    }));

    it("it has three movies if we start with three movies", function () {

        var listController = $controller("movieListController", {movies: movies});
        expect(listController.movies.length).toBe(3);
    });
  
});