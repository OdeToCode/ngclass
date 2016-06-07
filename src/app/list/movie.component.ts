import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router-deprecated"


@Component({
    selector: "atm-movie",
    template: require("./movie.component.html"),
    directives: [ROUTER_DIRECTIVES]
})
export class MovieComponent {
    @Input() movie;
    @Output() changeRating = new EventEmitter<number>(); 
       
    upRating() {
        this.changeRating.emit(this.movie.rating + 1);    
    }
}