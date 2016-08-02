import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {MovieData} from "../services/movies.service";
import {Movie} from "../models/movie";

@Component({
    templateUrl: "./movie-edit.component.html",
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class MovieEditComponent implements OnInit  {

    id: number;
    title: FormControl;
    rating: FormControl;
    length: FormControl;
    form: FormGroup;

    constructor(private movieData: MovieData,
                private route: ActivatedRoute,
                private router: Router) {
        this.title = new FormControl("", Validators.required);
        this.rating = new FormControl();
        this.length = new FormControl();
        this.form = new FormGroup({
            title: this.title,
            length: this.length,
            rating: this.rating
        });

        this.form.valueChanges.subscribe(o => console.log(o));
    }

    ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.movieData.getById(id)
            .subscribe(movie => {
                this.id = movie.id;
                this.title.updateValue(movie.title);
                this.rating.updateValue(movie.rating);
                this.length.updateValue(movie.length);
            }, error => console.log(error));
    }

    save() {
        let values = this.form.value;
        let movie = new Movie(this.id, values.title, 
                              values.length, values.rating);
        this.movieData.update(movie)
            .subscribe(m => this.router.navigate(["detail", m.id]),
                      error => console.log(error));

    }
}