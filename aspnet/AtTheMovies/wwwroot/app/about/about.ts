import {Component} from "angular2/core";

@Component({

    template: "<div>{{message}}</div>"
    
})
export class About {
    public message: string = "This is the about page"
}