import {Http, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Injectable} from "@angular/core";
import {Movie} from "../models/movie";

const apiUrl = "http://otc-movies.azurewebsites.net/api/movies/";
const deserialize = response => response.json();

const jsonHeaders = new Headers({
    "Content-Type": "application/json"
});

const jsonOptions = new RequestOptions({headers:jsonHeaders});

@Injectable()
export class MovieData {

    constructor(private http: Http) {

    }

    update(movie: Movie) {
        return this.http.put(apiUrl, JSON.stringify(movie), jsonOptions)
                   .map(deserialize)
                   .map(m => new Movie(m.id, m.title, m.length, m.rating));
    }

    create(movie: Movie) {
        return this.http.post(apiUrl, JSON.stringify(movie), jsonOptions)
                .map(deserialize)
                .map(m => new Movie(m.id, m.title, m.length, m.rating));
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