import { Router } from '@angular/router';
import { Movie } from './../../models';
import { ActivatedRoute } from '@angular/router';
import { MovieData } from './../../services';
import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
        selector: "movie-edit",
        templateUrl: "./movie-edit.html",        
})
export class MovieEditComponent {
    
    movie: Movie = new Movie(0, "", 0, 0);

    constructor(private movieData: MovieData, 
                private route: ActivatedRoute,
                private router: Router) {

    }

    ngOnInit() {
        this.route.params.subscribe(p => this.loadMovie(p["id"]));
    }

    loadMovie(id: string) {
        this.movieData.getById(id)
            .subscribe(m => this.movie = m);
    }

    save(form: NgForm) {
        if(form.valid) {
            this.movieData.save(this.movie)
                .subscribe(m => {
                    this.movie = m;
                    this.router.navigate(["/movies/detail", this.movie.id])
                });
        }
    }
}