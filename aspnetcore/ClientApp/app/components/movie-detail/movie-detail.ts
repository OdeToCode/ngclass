import { Movie } from './../../models';
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieData } from '../../services';

@Component({
    selector: "movie-detail",
    templateUrl: "./movie-detail.html"
})
export class MovieDetailComponent {
    
    id: string;
    route: ActivatedRoute;
    router: Router;
    movieData: MovieData;
    movie: Movie;

    constructor(route: ActivatedRoute, 
                router: Router,
                movieData: MovieData) {
        this.route = route;
        this.movieData = movieData;
        this.router = router;
        this.route.params.subscribe(p => this.loadMovie(p["id"]));        
    }

    loadMovie(id: string) {
        this.movieData.getById(id)
            .subscribe(m => this.movie = m);
    }

    goToList() {        
        this.router.navigate(["/movies"]);
    }
}