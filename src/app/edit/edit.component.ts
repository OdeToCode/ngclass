import {Component} from "@angular/core";
import {FORM_DIRECTIVES, NgFormControl} from "@angular/common";
import {MovieService} from "../services/movies.service";
import {RouteParams, Router} from "@angular/router-deprecated";
import {Movie} from "../models/movie";

@Component({
    selector: "atm-edit",
    template: require("./edit.component.html"),
    directives: [FORM_DIRECTIVES]
})
export class EditComponent {
    
    movie: Movie;
    
    constructor(private movieData: MovieService,
                private params: RouteParams,
                private router: Router) {

        this.movieData.getById(params.get("id"))
            .subscribe(movie => {
                this.movie = movie;   
            });
        
    }
    
    save(form: NgFormControl ) {
        if(form.valid) {
            this.movieData.update(this.movie)
                .subscribe(r => {
                    console.log(r);
                }, e => {
                   console.log(e); 
                });
        }
    }
    
}
