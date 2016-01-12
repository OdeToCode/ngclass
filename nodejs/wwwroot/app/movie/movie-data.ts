import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Movie} from "./Movie";

@Injectable()
export class MovieData {
    /**
     *
     */
    private movies: Array<Movie> = [];
    private http: Http;
    
    constructor(http: Http) {
        this.http = http;
    }
    
    
    getAll() {
        return this.http.get("/api/movies")
            .map(response => response.json())
            .map(data => {
                let movies: Movie[] = [];
                data.forEach(m => movies.push(new Movie(m.id, m.title, m.rating, m.year, m.length)));
                
                return movies;
                
            });
    }
    
    getById(id: number) {
        return this.http.get("/api/movies/" + id)
            .map(response => response.json());
    }
}