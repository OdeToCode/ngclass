import {Component} from "angular2/core";
import {FORM_DIRECTIVES, NgForm} from "angular2/common";
import {RouteParams, Router} from "angular2/router";
import {MovieData} from "../services/movie-data";
import {Movie} from "../movie";

@Component({
    templateUrl: "/movies-app/edit/edit.html",
    directives: [FORM_DIRECTIVES]  
})
export class Edit {
    
    movie: Movie = new Movie(1, "", 1, 1);
    
    constructor(private movieData: MovieData, 
                params: RouteParams,
                private router: Router) {
        
        let id = parseInt(params.get("id"));
        movieData.getById(id)
                 .subscribe(movie => this.movie = movie);
        
    }   
    
    save(form: NgForm) {
        this.movie.title = form.value.title;
        this.movie.rating = form.value.rating;
        this.movie.length = form.value.length;
        
        this.movieData.update(this.movie)
            .subscribe(r => {
                this.router.navigate(['Details', { id: this.movie.id}])
            }, err => console.log(err));
    }
}