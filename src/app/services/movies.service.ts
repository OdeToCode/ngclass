import {Movie} from "../models/movie";
import {Http, RequestOptions, Headers} from "@angular/http";
import {Injectable} from "@angular/core";

const baseUrl = "http://otc-movies.azurewebsites.net/movies/";
const toJson = r => r.json();
const toMovie = o => new Movie(o.id, o.title, o.rating, o.length);


@Injectable()
export class MovieService {

    constructor(private http: Http) {

    }

    update(movie:Movie) {
        
        let payload = JSON.stringify(movie);
        let options = new RequestOptions();
        let headers = new Headers({
           "Content-type": "application/json" 
        });
        
        options.headers = headers;
        
        return this.http.put(baseUrl, payload, options);
                        
    }

    getById(id: string) {
        return this.http.get(`${baseUrl}${id}`)
                   .map(toJson)
                   .map(toMovie);
    }


    getAll() {
        return this.http.get(baseUrl)
                   .map(res => res.json()
                   .map(o => 
                        new Movie(o.id, o.title, o.rating, o.length)));
    }
    
}
