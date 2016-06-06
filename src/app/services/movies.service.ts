import {Movie} from "../models/movie";
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

let onSuccess = function(...args) {
    console.log(args);
}

let onError = function(...args) {
    console.log(args);
}

//
// $.ajax("/movies.json", function(result) { // ... });
//

//
// $http.get("movies.json").then(success, errror);
//

//
// http.get("movies.json") -> Observable
//


@Injectable()
export class MovieService {

    constructor(private http: Http) {

    }

    getAll() {
        return this.http.get("movies.json")
                   .map(res => res.json().map(o => 
                        new Movie(o.id, o.title, o.rating, o.length)));
    }
    
}
