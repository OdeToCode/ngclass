import "angular2-universal-polyfills/browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {NgModule, Component} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@Component({
    selector: "movie-app",
    template: `Hello,{{name}} from Angular 2!
               <button (click)="changeName()">Change Name</button>
               
                <table class='table'>
                    <tr *ngFor="let movie of movies">
                        <td>{{movie.id}}</td>
                        <td
                            [ngClass]="{good: movie.rating > 8, bad: movie.rating < 3}"
                            >{{movie.title}}</td>
                        <td>
                            {{movie.rating}}
                            <button (click)="increaseRating(movie)">+</button>
                        </td>
                    </tr>
                </table>

               <input type="text" [(ngModel)]="name" />

             `
})
export class MovieAppComponent {

    name: string;
    movies: any;

    constructor() {
        this.name = "Scott!";
        this.movies = [
            { id: 1, title: "Star Wars", rating: 5 },
            { id: 2, title: "Gone With the Wind", rating: 4 },
            { id: 3, title: "Neighbors 2", rating: 2}
        ];
    }

    changeName() {
        this.name = "Allen!";
    }

    increaseRating(movie: any) {
        movie.rating += 1;
        if (movie.rating > 10) {
            movie.rating = 1;
        }
    }


}


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [MovieAppComponent],
    bootstrap: [MovieAppComponent]
})
export class AppModule {
    
}




platformBrowserDynamic().bootstrapModule(AppModule);








//import 'angular2-universal-polyfills/browser';
//import { enableProdMode } from '@angular/core';
//import { platformUniversalDynamic } from 'angular2-universal';
//import { AppModule } from './app/app.module';
//import 'bootstrap';

//// Enable either Hot Module Reloading or production mode
//if (module['hot']) {
//    module['hot'].accept();
//    module['hot'].dispose(() => { platform.destroy(); });
//} else {
//    enableProdMode();
//}

//// Boot the application, either now or when the DOM content is loaded
//const platform = platformUniversalDynamic();
//const bootApplication = () => { platform.bootstrapModule(AppModule); };
//if (document.readyState === 'complete') {
//    bootApplication();
//} else {
//    document.addEventListener('DOMContentLoaded', bootApplication);
//}
