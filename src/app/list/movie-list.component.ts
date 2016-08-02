import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {MovieData} from "../services/movies.service";
import {Movie} from "../models/movie";

@Component({
    templateUrl: "./movie-list.component.html",
    directives: [ROUTER_DIRECTIVES]
})
export class MovieListComponent  implements OnInit {
     movies: Movie[] = [];

    constructor(private movieData: MovieData,
                private router: Router) {
    }

    ngOnInit() {
        this.movieData.getAll()
            .subscribe(movies => this.movies = movies,
                       error => console.log(error));
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