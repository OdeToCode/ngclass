describe("IIFE", function() {

    if("can use apply", function() {

        function doWork(x, y, z) {
            expect(arguments[0] == x);
            return x + y + z;
        };

        var data = [1, 2, 3];

        doWork.apply(this, data)
        doWork.call(this, data[0], data[1], data[2]);

    });


    it("functional javascript", function() {

        function add(x, y) {
                return x + y;
        }

        function useOperator(op, x, y) {
            return op(x, y);
        }

        function getOperator() {

            return function(x,y) {
                return x * y;
            };

            /*
            function subtract(x, y) {
                return x - y;
            }

            return subtract;
            */
        }

        var result = useOperator(getOperator(), 5,5);
        expect(result).toBe(25);

    });


    it("closures", function() {

        function makeMessage(name) {
            return function() {
                return "Hello, " + name;
            };
        }

        var f1 = makeMessage("Scott");
        var f2 = makeMessage("Allen");

        expect(f1()).toBe("Hello, Scott");
        expect(f2()).toBe("Hello, Allen");

    });


    it("prevent scope leaks", function() {

        var outer;

        {
            (function() {
                var inner = 3;
                // ...
                outer = inner;
            }());
        }

        //expect(inner).toBe(3);
        expect(outer).toBe(3);

    });


});

describe("How prototypes work", function() {

    it("is via constructor functions", function() {


        function Movie(title, rating) {
            this.tite = title;
            this.rating = rating;

        }

        Movie.prototype = {
            increaseRating: function() {
                this.rating += 1;
            }
        };

        var movie1 = new Movie("Star Wars", 4);
        var movie2 = new Movie("Star Wars 2", 3);
        // var movie = new {}
        // Movie.call(movie)
        // movie.__proto__ = Movie.prototype
        movie1.increaseRating();

        expect(movie1.rating).toBe(5);
        expect(movie2.rating).toBe(3);



    });

});
