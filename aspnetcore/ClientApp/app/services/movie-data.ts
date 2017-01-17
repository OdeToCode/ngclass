import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Observable";
import { Movie } from './../models/';

export interface IMovie {
    id: number;
    rating: number;
    title: string;
    length? : number;
}

let parseResponse = r => r.json();
let toMovie = m => new Movie(m.id, m.title, m.length, m.rating);

@Injectable()
export class MovieData {

    constructor(private http: Http) {
        
    }

    getById(id: string) {
        return this.http.get(`/api/movies/${id}`)
                .map(parseResponse)
                .map(toMovie);
    }

    getAllMovies() : Observable<Movie[]> {
        return this.http.get("/api/movies")
                    .map(parseResponse)
                    .map(arr => arr.map(toMovie));
    }

    save(movie: Movie){
        return this.http.put("/api/movies", movie)
                   .map(parseResponse)
                   .map(toMovie);
                   
    }

    create(movie: IMovie) {
        return this.http.post("/api/movies", movie)
                .map(parseResponse)
                .map(toMovie);
    }

    
}