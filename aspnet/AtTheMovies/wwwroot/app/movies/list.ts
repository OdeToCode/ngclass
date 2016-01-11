import {Component} from "angular2/core";
import {Movie} from "./Movie";
import {MovieData} from "./movie-data";
import {ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: "movies-list",    
    templateUrl: "/app/movies/list.html",
    directives: [ROUTER_DIRECTIVES]
})
export class List {
    
    movies: Array<any>;  
    
    constructor(movieData: MovieData) {        
        this.movies = movieData.getAll();
    }
      
}