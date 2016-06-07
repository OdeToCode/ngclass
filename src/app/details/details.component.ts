import {Component} from "@angular/core";
import {MovieService} from "../services/movies.service";
import {RouteParams, Router} from "@angular/router-deprecated";
import {Movie} from "../models/movie";

@Component({
    selector: "atm-details",
    template: require("./details.component.html")
})
export class DetailsComponent {
    
    movie: Movie;
    
    constructor(private movieData: MovieService,
                private params: RouteParams,
                private router: Router) {

        this.movieData.getById(params.get("id"))
            .subscribe(movie => {
                this.movie = movie;   
            });
        
    }
    
    goToList() {
        this.router.navigate(['List']);
    }
    
}
