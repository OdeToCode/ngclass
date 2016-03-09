import {Component} from "angular2/core";
import {FORM_DIRECTIVES, NgForm, FormBuilder,
Control, ControlGroup, Validators} from "angular2/common";
import {RouteParams, Router} from "angular2/router";
import {MovieData} from "../services/movie-data";
import {Movie} from "../movie";


let movieTitleStartsWithS = function(control: Control) {
    if (control.value) {
        if (control.value[0] != 'S') {
            return {
                invalidTitle: true,
            }
        }
    }
    return {};
}

let titleVaidations =
    Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100)       
        //        movieTitleStartsWithS  
    ]);


@Component({
    templateUrl: "/movies-app/edit/edit.html",
    directives: [FORM_DIRECTIVES]
})
export class Edit {

    movie: Movie;
    form: ControlGroup;
    title: Control;
    rating: Control;
    length: Control;
    disable: boolean = true;

    constructor(private movieData: MovieData,
        params: RouteParams,
        private router: Router,
        formBuilder: FormBuilder) {

        let id = params.get("id");
        if (id) {
            movieData.getById(parseInt(id))
                .subscribe(movie => {

                    setTimeout(() => {
                        this.movie = movie;
                        this.title.updateValue(movie.title);
                        this.rating.updateValue(movie.rating);
                        this.length.updateValue(movie.length);
                        this.disable = false;
                    }, 0);

                });
        } else {
            this.disable = false;
        }

        this.title = new Control("", titleVaidations);
        this.rating = new Control(3);
        this.length = new Control(60);
        this.form = formBuilder.group({
            title: this.title,
            rating: this.rating,
            length: this.length
        });
        this.form.valueChanges.subscribe(r => console.log(r));

    }

    save() {
        if (this.form.valid) {
            if(!this.movie) {
                this.movie = new Movie(0, "", 0, 0);
            }
            this.movie.title = this.title.value;
            this.movie.rating = this.rating.value;
            this.movie.length = this.length.value;

            if(this.movie.id) {
                this.movieData.update(this.movie)
                    .subscribe(r => {
                        this.router.navigate(['Details', { id: this.movie.id }])
                    }, err => console.log(err));
            }
            else {
                this.movieData.create(this.movie)
                    .subscribe(r => {
                        this.router.navigate(['Details', { id: r.id }])
                    }, err => console.log(err));
            }
        }
    }
}