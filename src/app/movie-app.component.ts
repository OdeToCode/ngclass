import {Component} from "@angular/core";
import {Movie} from "./models/movie";
import {MovieData} from './services/moviedata.service';

@Component({
    selector: "movies-app",
    templateUrl: "./movie-app.component.html"
})
export class MovieAppComponent {

    messageOfTheDay: string;
    movies: Movie[];

    constructor(movieData: MovieData) {
        this.messageOfTheDay = null;
        movieData.getAll()
                 .subscribe(movies => this.movies = movies,
                            error => console.log(error)); 
    }

    changeMessage() {
        this.messageOfTheDay = "This has changed!";
    }

    rateMovie(movie: Movie) {
        return {
            good: movie.rating >= 4,
            bad: movie.rating <= 2
        };
    }

}
