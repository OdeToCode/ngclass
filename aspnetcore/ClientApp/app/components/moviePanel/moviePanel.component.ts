import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Movie} from "../../models";

@Component({
    selector: "movie-panel",
    template: require("./moviePanel.component.html")
})
export class MoviePanelComponent {
    @Input() movie: Movie;
    @Output() increaseRating: EventEmitter<Movie> = new EventEmitter<Movie>();

    plus() {
        this.increaseRating.emit(this.movie);   
    }
}

