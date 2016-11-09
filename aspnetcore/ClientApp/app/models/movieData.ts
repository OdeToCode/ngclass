import {Movie} from "./Movie";

var movies = [
    new Movie(1, "Star Wars", 5),
    new Movie(2, "Gone With the Wind", 4),
    new Movie(3, "Bad Movie", 2)
];

export class MovieData {

    getAll() {
        return movies;
    }

    getById(id: number) {
        let movie = movies.find(m => m.id == id);
        return movie;
    }
}