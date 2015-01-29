describe("The home page", function() {

    it("should show three movies", function() {

        browser.get("http://localhost:13467/default.html#/list");

        var movie = element(by.repeater("movie in main.movies"));
        expect(movie.rows.count, 3);
    });
});