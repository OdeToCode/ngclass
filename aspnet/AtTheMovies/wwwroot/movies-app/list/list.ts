import {Component} from "angular2/core";
import {Movie} from "../movie";
import {Router, ROUTER_DIRECTIVES} from "angular2/router";
import {Counter, InMemoryCounter} from "../services/counter";
import {MovieData} from "../services/movie-data";
import {StarPipe} from "./star-pipe";

@Component({
    templateUrl: "/movies-app/list/list.html",
    directives: ROUTER_DIRECTIVES,
    providers: [],
    pipes: [StarPipe]
})
export class List {

    movies: Movie[];

    constructor(private router: Router, 
                private movieData: MovieData) 
    {                      
        movieData.getAll()
                 .subscribe(result => this.movies = result,
                            error => console.log(error));
    }
    
    getIterableForMovieRating(movie) {
        var thing = [];
        for(let i  = 0; i < movie.rating; i++) {
            thing.push(i);
        }
        return thing;
    }
    
    goToDetails(movie:Movie) {
        let id = movie.id;     
        this.router.navigate(['Details', { id:movie.id}]); 
    }
}

