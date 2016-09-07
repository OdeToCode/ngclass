import {Component, Input} from "@angular/core";
import {Movie} from "../models/movie";

@Component({
    selector: "movie-summary",
    templateUrl: "./movie-summary.component.html"
})
export class MovieSummaryComponent {
    @Input() movie: Movie;

    getMovieUrl(movie: Movie) {
        return `/details/${movie.id}`;
    }
}
