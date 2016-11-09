import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {MovieData} from "../../models"; 

@Component({
    selector: "movie-detail",
    template: require("./movieDetail.component.html")
})
export class MovieDetailComponent {
    movie: any;

    constructor(private route: ActivatedRoute,
                private movieData: MovieData) {
        
    }

    ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.movie = this.movieData.getById(id);                   
    }
}
