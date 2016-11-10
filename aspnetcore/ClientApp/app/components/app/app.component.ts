import { Component } from '@angular/core';

import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

let url = "http://otcmovies.azurewebsites.net/api/movies/";


@Component({
    selector: 'movie-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
})
export class AppComponent {

   // testing
   constructor(private http: Http) {

   }

//    ngOnInit() {
//         this.getInitalData().subscribe(movies => {                 
//             console.log("Initial data" + JSON.stringify(movies)); 
//             this.getDetailData(movies).subscribe(
//                 movie => console.log("Detail data: " + JSON.stringify(movie)));           
//         });
//    }

//    getInitalData() {
//        return this.http.get(url).map(deserialize);
//    }

//    getDetailData(movies) {
//        return Observable.from(movies)
//                  .flatMap((movie:any) => this.http.get(`${url}${movie.id}`))
//                  .map(deserialize);
       
//    }
}

const deserialize = (r : Response) => r.json();



