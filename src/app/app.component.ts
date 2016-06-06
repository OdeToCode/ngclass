import {Component} from "@angular/core";

@Component({
    selector: "atm-app",
    template: require("./app.component.html")
})
export class AppComponent {
    
    message: string;
    
    constructor() {
        this.message = "Hello from a component";
    }
}
    