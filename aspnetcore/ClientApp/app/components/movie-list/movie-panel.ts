import {Component, Input} from "@angular/core";
import {Movie} from "../../../models/Movie";

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
export class MoviePanelComponent {
    @Input() movie: Movie;
}