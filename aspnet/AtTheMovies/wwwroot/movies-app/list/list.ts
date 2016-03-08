import {Component} from "angular2/core";
import {Movie} from "../movie";
import {Router} from "angular2/router";

@Component({
    templateUrl: "/movies-app/list/list.html",
    directives: []
})
export class List {

    movies: Movie[];

    constructor(private router: Router) {
        this.movies = [
            new Movie(1, "Star Wars", 5, 120),
            new Movie(2, "Star Trek", 5, 100),
            new Movie(3, "Starship Troopers", 3, 90)
        ];
    }
    
    goToDetails(movie:Movie) {
        let id = movie.id;     
        this.router.navigate(['Details', { id:movie.id}]); 
    }
}

