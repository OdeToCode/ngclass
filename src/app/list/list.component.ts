import {Component} from "@angular/core";
import {Movie} from "../models/movie";
import {MovieService} from "../services/movies.service";
import {MovieComponent} from "./movie.component";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";

@Component({
    selector: "atm-list",
    template: require("./list.component.html"),
    directives: [ROUTER_DIRECTIVES, MovieComponent]
})
export class ListComponent {
   
    movies: Array<Movie>;
    
    constructor(movieData: MovieService) {
        movieData.getAll()
                 .subscribe(result => {
                    this.movies = result;
                 });
    }
    
    handleClick(event: Event) {
        console.log(event);
    }
    
    rateMovie(movie: Movie) {
        return {
            good: movie.rating > 3,
            bad: movie.rating < 2 
        };
    }
    
    changeRating(movie: Movie, $event) {
        if($event > 5) {
            movie.rating = 1;
        }
        else if($event < 1) {
            movie.rating = 5;
        }
        else {
            movie.rating = $event;
        }
    }  
}
   