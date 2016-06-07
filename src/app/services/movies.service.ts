import {Movie} from "../models/movie";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

const baseUrl = "http://otc-movies.azurewebsites.net/movies/";
const toJson = r => r.json();
const toMovie = o => new Movie(o.id, o.title, o.rating, o.length);


@Injectable()
export class MovieService {

    constructor(private http: Http) {

    }

    getById(id: string) {
        return this.http.get(`${baseUrl}${id}`)
                   .map(toJson)
                   .map(toMovie)
    }


    getAll() {
        return this.http.get(baseUrl)
                   .map(res => res.json()
                   .map(o => 
                        new Movie(o.id, o.title, o.rating, o.length)));
    }
    
}
