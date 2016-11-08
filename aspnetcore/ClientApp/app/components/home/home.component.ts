import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent {
    name: string;
    movies: any;

    constructor() {
        this.name = "Scott!";
        this.movies = [
            { id: 1, title: "Star Wars", rating: 5 },
            { id: 2, title: "Gone With the Wind", rating: 4 },
            { id: 3, title: "Neighbors 2", rating: 2}
        ];
    }

    changeName() {
        this.name = "Allen!";
    }

    increaseRating(movie: any) {
        movie.rating += 1;
        if (movie.rating > 10) {
            movie.rating = 1;
        }
    }
}
