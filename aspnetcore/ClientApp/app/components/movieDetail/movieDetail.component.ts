import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {MovieData, Movie} from "../../models"; 

@Component({
    selector: "movie-detail",
    template: require("./movieDetail.component.html")
})
export class MovieDetailComponent {
    movie: Movie;

    constructor(private route: ActivatedRoute,
                private movieData: MovieData) {
        
    }

    ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.movieData.getById(id)
            .subscribe(movie => this.movie = movie);                  
    }
}
