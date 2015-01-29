describe("The DetailsController", function() {

    beforeEach(function() {
        module("moviesApp");
    });

    var $controller;
    var $httpBackend;
    var errors;
    beforeEach(inject(function(_$controller_, _$httpBackend_, _errors_) {
        $controller = _$controller_;
        $httpBackend = _$httpBackend_;
        errors = _errors_;
    }));

    it("will process movies sucessuly", function() {
        $httpBackend.when("GET", "/api/movies/2").respond({ title: "Foo" });
        var routeParams = { id: 2 };
        var controller = $controller(
            "DetailsController", {
            $routeParams: routeParams
            });

        $httpBackend.flush();
        expect(controller.movie).toBeDefined();
    });

    it("will process an error appropriately", function() {
        $httpBackend.when("GET", "/api/movies/2").respond(500);
        var routeParams = { id: 2 };
        var controller = $controller(
            "DetailsController", {
                $routeParams: routeParams
            });
        $httpBackend.flush();
        expect(controller.movie).toBeUndefined();
        expect(errors.getCurrentErrors().length).toBe(1);
    });


});