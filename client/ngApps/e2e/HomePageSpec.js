describe("The Home Page", function() {

    var HomePage = function() {
        this.name = "Home";
    };

    HomePage.prototype = {
        go: function() {
            browser.get("http://localhost:8080/default.html#/list");
            browser.waitForAngular();
        },

        getMoviesRepeater: function() {
            return element.all(by.repeater("movie in list.movies"));
        },
    
        search: function(searchTerm) {
            element(by.model("list.searchTerm")).sendKeys(searchTerm);
        }
    };

    var page;
    beforeEach(function() {
        page = new HomePage();
        page.go();
    });

    it("should filter by search term", function () {
        page.search("zzz");

        var movies = page.getMoviesRepeater();
        expect(movies.count()).toBe(0);

    });

    it("should show some movies", function () {

        var movies = page.getMoviesRepeater();
        expect(movies.count() > 0).toBe(true);
    });

});