import {Component} from "angular2/core";

@Component({
    selector: "movies-about",
    templateUrl: "/app/about/about.html"
})
export class About {
    /**
     * About page
     */
    message: string;
    
    constructor() {
        this.message = "About the app"
        
    }
}