import {Component} from "@angular/core";
import {Movie} from "../../../models/Movie";

@Component({
    selector: "movie-list",
    templateUrl: "./movie-list.html"
})
export class MovieListComponent {

    movies: Movie[];

    constructor() {
        this.movies = [
            new Movie(1, "Star Wars", 60, 5),
            new Movie(2, "Harry Potter", 90, 4),
            new Movie(3, "Lord of the Rings", 500, 3)
        ];
    }

}