import {Movie} from "./Movie";
import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs";

let baseUrl = "/movies";

@Injectable()
export class MovieData {
  
   private movies: Array<Movie> = [];
    
    constructor(private http: Http) {
    } 
    
    getAll() : Observable<Movie[]> {
        return this.http.get(baseUrl)
                 .map(response => response.json())
                 .map(json => json.map(m => 
                    new Movie(m.id, m.title, m.rating, m.length)));
    }
    
    getById(id: number) {
        return this.http.get(`${baseUrl}/${id}`)
                    .map(response => response.json());
    }
    
}