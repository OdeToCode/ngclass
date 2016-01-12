import {Movie, MovieType} from "./Movie";
import {Http, RequestOptions, Headers} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs";


let baseUrl = "/movies";

@Injectable()
export class MovieData {
  
   private movies: Array<Movie> = [];
    
    constructor(private http: Http) {
        
    } 
    
    update(movie: MovieType) {
        
        var options = new RequestOptions();
        options.headers = new Headers({
           "Content-Type": "application/json" 
        });
        
        
        return this.http.put(`${baseUrl}`,
                        JSON.stringify(movie), options);
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