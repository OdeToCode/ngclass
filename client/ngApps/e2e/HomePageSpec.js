describe("The Home Page", function() {


    it("should show some movies", function() {
        browser.get("http://localhost:8080/default.html#/list");

        browser.waitForAngular();
        var movies = element.all(by.repeater("movie in list.movies"));

    });

});