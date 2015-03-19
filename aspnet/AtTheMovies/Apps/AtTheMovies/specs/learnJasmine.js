

describe("How Jasmine behaves", function() {

    it("show compare objects", function() {

        var person1 = { name: "Scott" };
        var person2 = { name: "Scott" };

        // .toBe == false
        expect(person1).toEqual(person2);

    });

    it("is strict", function() {

        "use strict";

        var userInput = "012";
        var asInt = parseInt(userInput);
        expect(asInt).toBe(12);

        var doWork = function() {
            var x = 10;
        };

        doWork();
        // x is not defined
    });

    it("is an async test", function(done) {

        var x = 1;

        setTimeout(function() {
            x = 10;
            expect(x).toBe(10);
            done();
        }, 0);
    });


    it("should report a passing test", function() {

        // arrange
        var result;

        // act
        result = true;

        //assert
        expect(result).toBe(true);
        
    });

});