import {Component, OnInit} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
import {FORM_DIRECTIVES, NgForm, FormBuilder, Control, ControlGroup} from "angular2/common";
import {MovieData} from "./movie-data";
import {Movie} from "./Movie";


@Component({
    templateUrl: "/app/movies/edit.html",
    directives: [FORM_DIRECTIVES]
})
export class Edit implements OnInit{

    id: number;
    title: Control;
    rating: Control;
    length: Control;
    editForm: ControlGroup;
    result: any;

    constructor(params: RouteParams,
        private movieData: MovieData,
        builder: FormBuilder,
        private router: Router) {

        this.editForm = builder.group({
            "title": ["initial value"],
            "rating": [1],
            "length": [120]
        });

        this.title = this.editForm.controls["title"] as Control;
        this.rating = this.editForm.controls["rating"] as Control;
        this.length = this.editForm.controls["length"] as Control;
        this.id = parseFloat(params.get("id"));
      
    }

    ngOnInit() {
         
        this.movieData.getById(this.id)
            .subscribe(
            movie => {
                this.title.updateValue(movie.title);
                this.length.updateValue(movie.length);
                this.rating.updateValue(movie.rating);
            },
            error => console.log(error)
            );
    }


    submit() {

        if (this.editForm.valid) {
            let data = this.editForm.value;
            data.id = this.id;

            this.movieData.update(data)
                .subscribe(
                () => {
                    this.router.navigate(['Detail', { id: this.id }]);
                },
                error => console.log(error)
                )

        }
    }

}