import {Component, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms";
import {MovieData} from "../services/moviedata.service";
import {Movie} from "../models/movie";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    templateUrl: "./movieedit.component.html"
})
export class MovieEditComponent implements OnInit {

    movie: Movie;

    constructor(private movieData: MovieData, 
                private route: ActivatedRoute,
                private router: Router) {

                }

    save(form: NgForm) {
        if (form.valid) {
            this.movieData.save(this.movie)
                .subscribe(movie => {
                    this.router.navigateByUrl(`details/${movie.id}`);
                },
                error => console.log(error));
        }
    }

    ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.movieData.getById(id)
                    .subscribe(movie => this.movie = movie, 
                               error => console.log(error));
    }

}
