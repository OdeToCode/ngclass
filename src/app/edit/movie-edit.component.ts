import {Component} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";


@Component({
    templateUrl: "./movie-edit.component.html"
})
export class MovieEditComponent {

    title: FormControl;
    rating: FormControl;
    length: FormControl;
    form: FormGroup;

    constructor() {
        this.title = new FormControl("", Validators.required);
        this.rating = new FormControl();
        this.length = new FormControl();
        this.form = new FormGroup({
            title: this.title, 
            length : this.length, 
            rating: this.rating
        });
    }
}