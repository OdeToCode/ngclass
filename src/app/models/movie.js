var Movie = (function () {
    function Movie(id, title, rating, length) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.length = length;
    }
    Movie.prototype.upRating = function () {
        if (this.rating < 5) {
            this.rating += 1;
        }
        else {
            this.rating = 1;
        }
    };
    Movie.prototype.downRating = function () {
        if (this.rating > 1) {
            this.rating -= 1;
        }
        else {
            this.rating = 5;
        }
    };
    Object.defineProperty(Movie.prototype, "isGood", {
        get: function () {
            return this.rating > 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "isBad", {
        get: function () {
            return this.rating < 2;
        },
        enumerable: true,
        configurable: true
    });
    return Movie;
})();
exports.Movie = Movie;
