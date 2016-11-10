import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Movie, MovieData} from "../../models";
import {NgForm} from "@angular/forms";


@Component({
    selector: "movie-edit",
    template: require("./movieEdit.component.html"),
    styles: [require("./movieEdit.component.css")]
})
export class MovieEditComponent implements OnInit {
    
    movie: Movie = new Movie(0, "", 1);
   
    constructor(private route: ActivatedRoute,
                private router: Router, 
                private movieData: MovieData) {
    }

    ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.movieData.getById(id)
            .subscribe(movie => this.movie = movie);
    }

    save(form: NgForm) {
        if(form.valid) {
            debugger;
            this.movieData.save(this.movie)
                .subscribe( movie => 
                    this.router.navigate(["/movie", movie.id])
                );
        }
    }
}