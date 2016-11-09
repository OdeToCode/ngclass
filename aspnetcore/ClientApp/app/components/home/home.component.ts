import { Component } from '@angular/core';
import {createMovies} from "../../models";
import {Movie} from "../../models";

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {
    movies: Movie[];

    constructor() {
        this.movies =createMovies();
    }
}
