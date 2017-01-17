import { ReactiveFormsModule } from '@angular/forms';
import {Movie} from "./Movie";

describe("A movie", function() {

    describe("when being rated", function() {
        
        it("should not exceed the maximum rating", function() {

            // arrange
            let movie = new Movie(1, "Foo", 1, 5);

            // act
            movie.increaseRating();

            // assert
            expect(movie.rating).toBe(1);

        });

    });


});

describe("unit tests", function() {

    it("is a failing test", function() {

        expect(true).toBe(true);

    });

})