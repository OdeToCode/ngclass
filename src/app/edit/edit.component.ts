import {Component, OnInit} from "@angular/core";
import {FORM_DIRECTIVES, ControlGroup, AbstractControl,
    Control, NgFormControl, Validators} from "@angular/common";
import {MovieService} from "../services/movies.service";
import {RouteParams, Router} from "@angular/router-deprecated";
import {Movie} from "../models/movie";

let createRatingValidator = function (min: number, max: number) {
    return function (control: AbstractControl): any {

        let value = control.value;
        let valueAsNumber = Number.parseInt(value);
        if (valueAsNumber < min) {
            return { min: true }
        }
        else if (valueAsNumber > max) {
            return { max: true }
        }
    }
}

let movieTitleMustStartWithS = function (control: AbstractControl) {

    let value = control.value;
    if (value && value[0] != 'S') {
        return { invalidTitle: true }
    }
};

let movieValidator = Validators.compose(
    [Validators.required, movieTitleMustStartWithS]
);


@Component({
    selector: "atm-edit",
    template: require("./edit.component.html"),
    directives: [FORM_DIRECTIVES]
})
export class EditComponent implements OnInit {

    form: ControlGroup;
    title: Control;
    rating: Control;
    length: Control;
    id: number;
    maxRating: number;
    minRating: number;

    constructor(private movieData: MovieService,
        private params: RouteParams,
        private router: Router) {

        this.id = parseInt(params.get("id"));
        this.minRating = 1;
        this.maxRating = 5;
        this.title = new Control(null, movieValidator);
        this.rating = new Control(null, createRatingValidator(this.minRating, this.maxRating));
        this.length = new Control();
        this.form = new ControlGroup({
            title: this.title,
            length: this.length,
            rating: this.rating
        });

        this.form.valueChanges.subscribe(args => console.log(args));

    }

    ngOnInit() {
        this.movieData.getById(this.id.toString())
            .subscribe(movie => {
                this.id = movie.id;
                this.title.updateValue(movie.title);
                this.rating.updateValue(movie.rating);
                this.length.updateValue(movie.length);
            });
    }

    save() {

        if (this.form.valid) {
            var movie = new Movie(
                this.id,
                this.title.value,
                this.rating.value,
                this.length.value);
            this.movieData.update(movie)
                .subscribe(r => {
                    console.log(r);
                    this.router.navigate(['Details', { id: this.id }]);
                }, e => {
                    console.log(e);
                });
        }
    }

}
