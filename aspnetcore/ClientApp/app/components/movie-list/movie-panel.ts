import {Component, Input, OnInit} from "@angular/core";
import {Movie} from "../../models/Movie";

@Component({
    selector: "movie-panel",
    templateUrl: "./movie-panel.html",
    styles: [`
        .good {
            background-color: #00ff00
        }

        .bad {
            background-color: #ff0000
        }`]
})
export class MoviePanelComponent implements OnInit {
    @Input() movie: Movie;
    titleLength: number;

    ngOnInit() {
        this.titleLength = this.movie.title.length;

         // ...
    }

}