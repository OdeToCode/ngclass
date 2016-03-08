import {Component} from "angular2/core";
import {Movie} from "../movie";
import {Router, ROUTER_DIRECTIVES} from "angular2/router";
import {Counter, InMemoryCounter} from "../services/counter";

@Component({
    templateUrl: "/movies-app/list/list.html",
    directives: ROUTER_DIRECTIVES,
    providers: []
})
export class List {

    movies: Movie[];

    constructor(private router: Router, 
                public counter: Counter) {               
        
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

