import { Movie } from './../models/';


export class MovieData {
    getAllMovies() {
        return     [ 
            new Movie(1, "Star Wars", 60, 5),
            new Movie(2, "Harry Potter", 90, 4),
            new Movie(3, "Lord of the Rings", 500, 3)
        ]
    }
}