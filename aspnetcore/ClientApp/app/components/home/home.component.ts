import { Component } from '@angular/core';
import {Movie, MovieData} from "../../models";


@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {
    movies: Movie[] = [];

    constructor(movieData: MovieData) {
        movieData.getAll()   
            .subscribe(movies => this.movies = movies, 
                       err => console.log(err),
                       () => console.log("complete!"));
    }
}
