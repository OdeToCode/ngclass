import { Component } from '@angular/core';
import {Movie, MovieData} from "../../models";


@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {
    movies: Movie[] = [];

    constructor(private movieData: MovieData) {
        
    }

    ngOnInit() {
        this.refreshMovies();
    }

    refreshMovies() {
        this.movieData.getAll()   
            .subscribe(movies => this.movies = movies, 
                       err => console.log(err),
                       () => console.log("complete!"));
    }

    delete(movie: Movie) {
        this.movieData.delete(movie)
            .subscribe(movie => {
                this.refreshMovies();
            }); 
    }
}
