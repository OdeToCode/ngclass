import {Component} from "@angular/core";
import {Movie} from "../models/movie";
import {MovieData} from "../services/moviedata.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OnInit} from "@angular/core";

@Component({
    templateUrl: "./moviedetail.component.html"
})
export class MovieDetailComponent implements OnInit {
    movie: Movie;

    constructor(private movieData: MovieData,
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.movieData.getById(id)
            .subscribe(movie => {
                this.movie = movie;
            }, () => console.log("Error"));
    }

    goToList() {
        this.router.navigateByUrl("");
    }

}
