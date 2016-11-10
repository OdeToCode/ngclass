import { Http, Response, RequestOptions, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Movie } from "./Movie";

import "rxjs/add/operator/map";
import "rxjs/add/operator/retry";

const baseUrl = "http://otcmovies.azurewebsites.net/api/movies/";

//const baseUrl = "/api/movies/";

const processAllMovies = function (response: Response) {
    let movies = response.json();
    return movies.map(m => new Movie(m.id, m.title, m.rating));
}

const processMovie = function (response: Response) {
    let movie = response.json();
    return new Movie(movie.id, movie.title, movie.rating);
}


@Injectable()
export class MovieData {

    constructor(private http: Http) {

    }

    delete(movie: Movie) {
        let options = new RequestOptions();
        options.body = JSON.stringify(movie);
        options.method = "DELETE";
        options.headers = new Headers();
        options.headers.append("Content-Type", "application/json");
        return this.http.delete(baseUrl, options);
    }

    save(movie: Movie) {
        return this.http.put(baseUrl, movie)
            .map(processMovie);
    }

    getAll() {
        return this.http.get(baseUrl)
            .map(processAllMovies);
    }

    getById(id: number) {
        return this.http.get(`${baseUrl}${id}`)
            .map(processMovie);
    }
}