import {Movie} from "./Movie";
import {Http} from "angular2/http";
import {Injectable} from "angular2/core";

@Injectable()
export class MovieData {
  
   private movies: Array<Movie> = [];
    
    constructor(private http: Http) {
    } 
    
    getAll() {
        return this.http.get("/movies")
                 .map(response => response.json())
                 .map(json => {
                     let movies: Movie[] = [];
                     json.forEach(m => movies.push(
                         new Movie(m.id, m.title, m.rating, m.length)));
                     return movies;
                 });
    }
    
    getById(id: number) {
        for(let movie of this.movies) {
            if(movie.id == id){
                return movie;
            }
        }
        return null;
    }
    
}