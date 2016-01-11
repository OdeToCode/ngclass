import {bootstrap} from "angular2/platform/browser"
import {Component} from "angular2/core";
import {Movie} from "./Movie";

@Component({
    selector: "movie-app",
    templateUrl: "/app/movie-app.html"
})
export class MovieApp {
    message: string = "";
    movies: Array<Movie> = [];
    
    constructor() {
        this.movies.push(new Movie("Star Wars", 5));
        this.movies.push(new Movie("Mission Impossible 6", 4));
    }
    
    changeMessage() {
        this.message = "Changed from the component!";
    }
}

bootstrap(MovieApp);



