import {Component} from "@angular/core";
import { MovieData } from './../../services';
import {Movie} from "../../models/";

@Component({
    selector: "movie-list",
    templateUrl: "./movie-list.html"
})
export class MovieListComponent {

    movies: Movie[];
    error: any;
    message = "Hello!";


    constructor(movieData: MovieData) {
        movieData.getAllMovies()
                 .subscribe(movies => this.movies = movies, 
                            error => this.error = error);
    }

}