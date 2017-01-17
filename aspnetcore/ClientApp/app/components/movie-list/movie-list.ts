import {Component} from "@angular/core";
import { MovieData } from './../../services';
import {Movie} from "../../models/";

@Component({
    selector: "movie-list",
    templateUrl: "./movie-list.html"
})
export class MovieListComponent {

    movies: Movie[];

    message = "Hello!";


    constructor(movieData: MovieData) {
        this.movies = movieData.getAllMovies();
    }

}