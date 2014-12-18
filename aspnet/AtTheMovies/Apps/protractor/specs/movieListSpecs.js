var HomePage = require("../pages/HomePage");

describe("The movie list view", function () {

    var homePage = new HomePage();

    it("should display some movies", function() {
        homePage.go();
        expect(homePage.getNumberOfMovies()).toBe(3);
    });

    //it("should filter movies", function () {
    //    homePage.go();
    //    //homePage.search("Star");
    //    expect(homePage.getNumberOfMovies()).toBe(2);
    //});
});