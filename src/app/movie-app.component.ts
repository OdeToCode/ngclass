import {Component} from "@angular/core";
import {MovieData} from "./services/movies.service";
import {Movie} from "./models/movie";

@Component({
    selector: "movie-app",
    templateUrl: "./movie-app.component.html"
})
export class MovieAppComponent {

    movies: Movie[] = [];

    constructor(private movieData: MovieData) {
        this.movies = movieData.getAll();
    }

    rateMovie(movie: Movie) {
        const result = {
            good: false,
            bad: false
        };

        if(movie.rating > 4) {
            result.good = true;
        }
        if(movie.rating < 2) {
            result.bad = true;
        }
        return result;
    }

}