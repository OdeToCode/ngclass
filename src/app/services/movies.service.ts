import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Movie} from "../models/movie";

const apiUrl = "http://otc-movies.azurewebsites.net/api/movies/";
const deserialize = response => response.json();

@Injectable()
export class MovieData {

    constructor(private http: Http) {
      
    }

    getAll() : Observable<Movie[]>  {
        return this.http.get(apiUrl)
                   .map(deserialize)
                   .map(movies => movies.map(m => new Movie(m.id, m.title, m.length, m.rating)));                
    }

    getById(id: number) {
        return this.http.get(`${apiUrl}${id}`)
                   .map(deserialize)
                   .map(m => new Movie(m.id, m.title, m.length, m.rating));
    }

}