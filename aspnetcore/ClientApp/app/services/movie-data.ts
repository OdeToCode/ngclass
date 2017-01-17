import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Observable";
import { Movie } from './../models/';

@Injectable()
export class MovieData {

    constructor(private http: Http) {
        
    }

    getAllMovies() : Observable<Movie[]> {
        return this.http.get("/api/movies")
                    .map(response => response.json())
                    .map(arr => arr.map(m => new Movie(m.id, m.title, m.length, m.rating)));


    }
}