import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../models/movie";
import {MovieData} from "../services/movies.service";

@Component({
    templateUrl: "./movie-detail.component.html"
})
export class MovieDetailComponent implements OnInit {
    
    movie: Movie;

    constructor(private route: ActivatedRoute,
                private movieData: MovieData) {

    }

    ngOnInit() {
        const id = +this.route.snapshot.params["id"];
        this.movie = this.movieData.getById(id);
    }
}