import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {MovieData} from "../services/movies.service";
import {Movie} from "../models/movie";

@Component({
    templateUrl: "./movie-list.component.html",
    directives: [ROUTER_DIRECTIVES]
})
export class MovieListComponent {
     movies: Movie[] = [];

    constructor(movieData: MovieData,
                private router: Router) {
        this.movies = movieData.getAll();
    }

    goToMovie(id: number) {
        this.router.navigate(["detail", id]);
    }

    rateMovie(movie: Movie) {
        const result = {
            good: false,
            bad: false
        };

        if (movie.rating > 4 ) {
            result.good = true;
        }
        if ( movie.rating < 2 ) {
            result.bad = true;
        }
        return result;
    }
}