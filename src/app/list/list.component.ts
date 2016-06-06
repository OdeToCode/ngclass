import {Component} from "@angular/core";
import {Movie} from "../models/movie";
import {MovieService} from "../services/movies.service";

@Component({
    selector: "atm-list",
    template: require("./list.component.html")
})
export class ListComponent {
   
    movies: Array<Movie>;
    
    constructor(movieData: MovieService) {
        movieData.getAll()
                 .subscribe(result => {
                    this.movies = result 
                 });
    }
    
    rateMovie(movie: Movie) {
        return {
            good: movie.rating > 3,
            bad: movie.rating < 2 
        }
    }
    
    upRating(movie:Movie) {
        if(movie.rating < 5) {
            movie.rating += 1;
        }
        else{
            movie.rating = 1;
        }
    }      
}
    