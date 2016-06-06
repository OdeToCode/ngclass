import {Component} from "@angular/core";
import {Movie} from "./models/movie";

@Component({
    selector: "atm-app",
    template: require("./app.component.html")
})
export class AppComponent {
    
    message: string;
    movies: Array<Movie>;
    
    constructor() {
        this.message = "Hello from a component";
        this.movies = [
                new Movie(1, "Star Wars", 5, 120),
                new Movie(2, "Reservoir Dogs", 4, 130),
                new Movie(3, "The Hobbit", 1, 90)            
        ];
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
    
    changeMessage() {
        this.message = "New message!";
    }
}
    