import {Component} from "angular2/core";
import {Movie} from "../movie";
import {RouteParams, OnActivate, OnDeactivate, CanActivate} from "angular2/router";
import {Counter, InMemoryCounter} from "../services/counter";

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
    movie: Movie
    
    constructor(routeParams: RouteParams,
                public counter: Counter) {        
        let id = parseInt(routeParams.get("id"));                
        this.movie = new Movie(id, "STar Wars", 4, 120);
    }
    
    routerOnDeactivate(...parameters) {
        console.log(parameters)
    }
    
    routerOnActivate(...parameters) {
        console.log(parameters);
    }
}