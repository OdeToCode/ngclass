import {Component} from "@angular/core";
import {Movie} from "./models/movie";

@Component({
    selector: "movies-app",
    templateUrl: "./movie-app.component.html"
})
export class MovieAppComponent {

    messageOfTheDay: string;
    movies: Movie[];

    constructor() {
        this.messageOfTheDay = null;
        this.movies = [
            new Movie(1, "Star Wars", 120, 5),
            new Movie(2, "Star Trek", 90, 4),
            new Movie(3, "Deadpool", 100, 1)
        ];
    }

    outer() {
        console.log("outer");
        return false;
    }

    inner() {
        console.log("inner");
        return true;
    }

    changeMessage() {
        this.messageOfTheDay = "This has changed";
    }

    rateMovie(movie: Movie) {
        return {
            good: movie.rating >= 4,
            bad: movie.rating <= 2
        };
    }

}
