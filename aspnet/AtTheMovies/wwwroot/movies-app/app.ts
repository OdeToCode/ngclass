import {Component} from "angular2/core";

@Component({
    selector: "movies-app",
    templateUrl: "/movies-app/app.html"   
})
export class App {
    name: string;
    color: string;
  
    constructor() {
        this.name = "World";
        this.color = "green";      
    }
       
       
    setColor(newColor) {
        this.color = newColor;
    }
}