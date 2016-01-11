import {Movie} from "./Movie";

export class MovieData {
    /**
     *
     */
    private movies: Array<Movie> = [];
    
    constructor() {
        
        this.movies.push(new Movie(1, "Star Wars", 5, 123));
        this.movies.push(new Movie(2, "Mission Impossible 6", 4, 180));
        this.movies.push(new Movie(3, "Twilight", 2));
    }
    
    
    getAll() {
        return this.movies;
    }
    
    getById(id: number) {
        for (let movie of this.movies) {
            if (movie.id == id) {
                return movie;
            }
        }
    }
}