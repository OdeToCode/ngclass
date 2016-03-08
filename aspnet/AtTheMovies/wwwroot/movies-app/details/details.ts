import {Component} from "angular2/core";
import {Movie} from "../movie";
import {RouteParams, OnActivate, OnDeactivate, CanActivate} from "angular2/router";
import {Counter, InMemoryCounter} from "../services/counter";
import {MovieData} from "../services/movie-data";

// let canActivate = function(...parameters) {
//     console.log(parameters);
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//             resolve(true);
//         }, 5000); 
//     });
// }
//@CanActivate(canActivate)

@Component({
    templateUrl:"/movies-app/details/details.html"
})
export class Details implements OnActivate, OnDeactivate {
    movie: Movie;
    
    constructor(routeParams: RouteParams, movieData: MovieData) 
    {        
        let id = parseInt(routeParams.get("id"));                
        movieData.getById(id)
                 .subscribe(movie => this.movie = movie,
                            error => console.log(error));
    }
    
    routerOnDeactivate(...parameters) {
        console.log(parameters)
    }
    
    routerOnActivate(...parameters) {
        console.log(parameters);
    }
}