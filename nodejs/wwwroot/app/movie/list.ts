import {Component} from "angular2/core";
import {Movie} from "./Movie";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {MovieData} from "./movie-data";

@Component({
    selector: "movie-list",
    templateUrl: "/app/movie/list.html",
    directives: [ROUTER_DIRECTIVES]
})
export class List {
    movies: Array<Movie> = [];
    
    /**
     *
     */
    constructor(movieData: MovieData) {
        //this.movies = 
        movieData
            .getAll()
            .subscribe(
                (movies) => {
                    console.log(movies);
                    this.movies = movies;
                }, 
                (response) => console.log('error', response));
        
    }
}