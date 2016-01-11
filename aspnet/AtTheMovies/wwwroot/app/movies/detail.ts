import {Component} from "angular2/core";
import {RouteParams, CanActivate, OnActivate, ComponentInstruction} from "angular2/router";
import {MovieData} from "./movie-data";
import {Movie} from "./Movie";

let logActivate = function(prev: ComponentInstruction, 
                            next:ComponentInstruction) {
    console.dir(prev);
    console.dir(next);
    return true;                                   
}

@CanActivate(logActivate)
@Component({
    templateUrl:"/app/movies/detail.html"
})
export class Detail implements OnActivate{ 
    
    movie: Movie;
    
    constructor(movieData: MovieData, params: RouteParams) {
        let id = params.get("id");
        this.movie = movieData.getById(parseFloat(id));
        
    }
    
    routerOnActivate(next, prev) {
        logActivate(next, prev);
    }
                                    
}   
   