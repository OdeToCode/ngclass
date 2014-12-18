var HomePage = function() {

    this.go = function() {
        browser.get("http://localhost:1346/default.html#/list");
    };

    this.getNumberOfMovies = function() {
        var table = element(by.repeater("movie in list.movies"));
        console.dir(table);
    };


};

module.exports = HomePage;