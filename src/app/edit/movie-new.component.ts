import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {Movie} from "../models/movie";
import {MovieData} from "../services/movies.service";

@Component({
    templateUrl: "./movie-new.component.html"
})
export class MovieNewComponent {
    movie: Movie = new Movie(0, "", 100, 3);

    constructor(private movieData: MovieData,
                private router: Router) {

    }

    save(form : NgForm) {
        if(form.valid) {
            this.movieData.create(this.movie)
                .subscribe(movie => {
                    this.router.navigate(['detail', movie.id])
                }, error => console.log(error));
        }
    }
}