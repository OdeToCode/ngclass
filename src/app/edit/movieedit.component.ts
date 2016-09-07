import {Component, OnInit} from "@angular/core";
import {MovieData} from "../services/moviedata.service";
import {Movie} from "../models/movie";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: "./movieedit.component.html"
})
export class MovieEditComponent implements OnInit {

    movie: Movie;

    constructor(private movieData: MovieData, 
                private route: ActivatedRoute) {

                }

    ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.movieData.getById(id)
                    .subscribe(movie => this.movie = movie, 
                               error => console.log(error));
    }

}
