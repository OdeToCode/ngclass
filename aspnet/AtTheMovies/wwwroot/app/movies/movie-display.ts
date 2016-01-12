import {ROUTER_DIRECTIVES} from "angular2/router";
import {RatingPipe} from "./rating-pipe";
import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Movie} from "./Movie";

@Component({
    selector: "movie-display",
    templateUrl: "/app/movies/movie-display.html",  
    directives: [ROUTER_DIRECTIVES] ,
    pipes: [RatingPipe]
})
export class MovieDisplay {
    
    @Input() movie: Movie;
    @Output() editMovie: EventEmitter<Movie> = new EventEmitter();
    
    edit() {
        this.editMovie.emit(this.movie);
    }
    
}