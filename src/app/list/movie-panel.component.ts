import {Component, Input, OnInit, 
        Output, EventEmitter} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Movie} from "../models/movie";

@Component({
    selector: "movie-panel",
    templateUrl: "./movie-panel.component.html",
    directives: [ROUTER_DIRECTIVES]
})
export class MoviePanelComponent implements OnInit {
    @Input() movie: Movie;
    @Output() navigate = new EventEmitter<number>();

    constructor() {

    }

    goToMovie() {
        this.navigate.emit(this.movie.id);
    }

    ngOnInit() {

    }
}