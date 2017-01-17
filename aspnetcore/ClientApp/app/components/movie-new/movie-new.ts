import { platformNodeDynamic } from 'angular2-universal';
import { Router } from '@angular/router';
import { MovieData } from './../../services/movie-data';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

var isValidTitle = function(control: FormControl) {
    
    const value = control.value;
    if(value && value[0] != "S") {
        return {
            isValidTitle: true
        }
    }
    return null;
}

@Component({
    selector: "movie-new",
    templateUrl: "./movie-new.html"

})
export class MovieNewComponent {
    form: FormGroup;
    title: FormControl;
    rating: FormControl;

    constructor(private movieData: MovieData, private router: Router) {
        this.title = new FormControl("", [Validators.required, isValidTitle]);
        this.rating = new FormControl(0);
        this.form = new FormGroup({
            title: this.title, 
            rating: this.rating
        });

        this.form.valueChanges.subscribe(v => console.log(v));
    }

    save() {
        if(this.form.valid) {
            var value = this.form.value;
            this.movieData.create(value)
                .subscribe(m => this.router.navigate(["/movies/detail", m.id]));
        }
    }

}