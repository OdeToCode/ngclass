import {Component} from "angular2/core";
import {Movie} from "./Movie";
import {MovieData} from "./movie-data";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {RatingPipe} from "./rating-pipe";
import {MovieDisplay} from "./movie-display";

@Component({
    selector: "movies-list",    
    templateUrl: "/app/movies/list.html",
    directives: [ROUTER_DIRECTIVES, MovieDisplay] ,
    pipes: [RatingPipe]
})
export class List {
    
    movies: Array<any>;  
    
    constructor(movieData: MovieData, private router: Router) {        
                  
         movieData.getAll().subscribe(
             (movies) => this.movies = movies,
             (e) => console.log(e)              
         );
    }
   
    editMovie(id: number) {
        this.router.navigate(['Edit', {id:id}]);
    } 
   
}