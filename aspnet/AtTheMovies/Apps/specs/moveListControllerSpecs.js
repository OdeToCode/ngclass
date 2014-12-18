describe("The movieListController", function() {

    beforeEach(function() {
        // module is from angular-mocks
        module("moviesApp");
    });

    // inject is from angular mocks
    var $controller, $httpBackend, alerting;
    beforeEach(inject(function(_$controller_, _$httpBackend_, _alerting_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        alerting = _alerting_;
    }));

    it("has an empty movies array at the start", function() {

        var listController = $controller("movieListController");
        expect(listController.movies.length).toBe(0);

    });

    it("it has three movies if server returns three movies", function () {

        $httpBackend.when("GET", "/api/movies").respond([{}, {}, {}]);
        var listController = $controller("movieListController");
        $httpBackend.flush();
        expect(listController.movies.length).toBe(3);
    });

    it("an alert is shown if server call fails", function () {

        $httpBackend.when("GET", "/api/movies").respond(500);
        var listController = $controller("movieListController");
        $httpBackend.flush();
        expect(listController.movies.length).toBe(0);
        expect(alerting.currentAlerts.length).toBe(1);
    });
});