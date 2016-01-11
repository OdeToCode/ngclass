import {Component} from "angular2/core";
import {Router, RouteParams, CanActivate, OnActivate, ComponentInstruction} from "angular2/router";
import {MovieData} from "./movie-data";
import {Movie} from "./movie";

let logActivate = function(prev: ComponentInstruction, next: ComponentInstruction) {
    console.log(prev, next);
    return true;
}

@Component({
    selector: "movie-detail",
    templateUrl: "/app/movie/detail.html"
})
@CanActivate(logActivate)
export class Detail implements OnActivate{
    movie: Movie;
    private router: Router;
    
    /**
     * detail page component
     */
    constructor(movieData: MovieData, params: RouteParams, router: Router) {
       let id = params.get("id");
       this.router = router;
       this.movie = movieData.getById(parseInt(id, 10));
        
    }
    
    routerOnActivate(next, prev) {
        //logActivate(next, prev);
    }
    
    backToList() {
        this.router.navigate(['List']);
    }
}

