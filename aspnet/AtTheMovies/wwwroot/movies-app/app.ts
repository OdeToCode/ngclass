import {Component} from "angular2/core";
import {Movie} from "./movie";

@Component({
    selector: "movies-app",
    templateUrl: "/movies-app/app.html"   
})
export class App {
    
    movies: Movie[];
  
    constructor() {
        this.movies = [
            new Movie(1, "Star Wars", 5, 120),
            new Movie(2, "Star Trek", 5, 100),
            new Movie(3, "Starship Troopers", 3, 90)
        ];
    }       
}