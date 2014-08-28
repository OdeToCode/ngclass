describe("mainController", function() {

    beforeEach(module("app"));

    var main;
    var $httpBackend;
    beforeEach(inject(function($controller, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.when("GET", "/api/movies").respond([{}, {}, {}]);
        main = $controller("mainController");

    }));

    it("I can get the controller", function() {
        expect(main).toBeTruthy();
    });

    it("should start with no movies", function() {
        expect(main.movies.length).toBe(0);
    });


    it("when HTTP Call is complete should have 3 movies", function () {
        $httpBackend.flush();
        expect(main.movies.length).toBe(3);
    });


});