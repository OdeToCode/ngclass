import {Component} from "@angular/core";
import {Movie} from "../models/movie";
import {MovieService} from "../services/movies.service";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated";

@Component({
    selector: "atm-list",
    template: require("./list.component.html"),
    directives: [ROUTER_DIRECTIVES]
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
    
    upRating(event: any, movie:Movie) {
        if(movie.rating < 5) {
            movie.rating += 1;
        } else {
            movie.rating = 1;
        }
        event.movie = movie;
        // event.stopPropagation();
        
    }      
}
   