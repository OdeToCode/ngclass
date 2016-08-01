import {Movie} from "../models/movie";

export class MovieData {

    movies: Movie[];

    constructor() {
        this.movies = [
            new Movie(1, "Star Wars", 120, 5),
            new Movie(2, "Star Trek", 90, 4),
            new Movie(3, "Deadpool", 100, 5),
            new Movie(4, "Love, Actually", 75, 1)
        ];
    }

    getAll() {
        return this.movies;
    }

    getById(id: number) {
        return this.movies.find(m => m.id === id);
    }

}