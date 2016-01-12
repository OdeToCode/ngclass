import {Component} from "angular2/core";
import {Movie} from "./Movie";
import {MovieData} from "./movie-data";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {RatingPipe} from "./rating-pipe";

@Component({
    selector: "movies-list",    
    templateUrl: "/app/movies/list.html",
    directives: [ROUTER_DIRECTIVES] ,
    pipes: [RatingPipe]
})
export class List {
    
    movies: Array<any>;  
    
    constructor(movieData: MovieData) {        
                  
         movieData.getAll().subscribe(
             (movies) => this.movies = movies,
             (e) => console.log(e)              
         );
    }
    
    changeTitle(movie: Movie, newTitle: string) {
        movie.title= newTitle;
    }
      
}