import {Movie} from "../models/movie";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

const baseUrl = "http://otcmovies.azurewebsites.net/api/movies";

@Injectable() 
export class MovieData {

    constructor(private http: Http) {
        
    }

    getAll() {
       let result =  this.http.get(baseUrl)
                          .map(response => {
                                let result = response.json();
                                result = result.map(m => new Movie(m.id, m.title, m.length, m.rating))
                                return result;
                            });
       return result;
    }
}
