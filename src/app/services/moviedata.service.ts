import {Movie} from "../models/movie";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

const baseUrl = "http://otcmovies.azurewebsites.net/api/movies";

const parseMovie = (response) => {
    let movie = response.json();
    return new Movie(movie.id, movie.title, movie.length, movie.rating);
};


@Injectable() 
export class MovieData {

    constructor(private http: Http) {
        
    }

    save(movie: Movie) {
        return this.http.put(baseUrl, movie)
                   .map(parseMovie);

    }

    getById(id: string) {
        let result = this.http.get(`${baseUrl}/${id}`)
                         .map(parseMovie);
        return result;
    }

    getAll() {
       let result =  this.http.get(baseUrl)
                          .map(response => {
                                let movies = response.json();
                                
                                movies = movies.map(m => new Movie(m.id, m.title, m.length, m.rating));
                                return movies;
                            });
       return result;
    }
}
