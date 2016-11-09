import { Component } from '@angular/core';
import {Movie, MovieData} from "../../models";

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {
    movies: Movie[];

    constructor(movieData: MovieData) {
        this.movies = movieData.getAll();
    }
}
