import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {ListComponent} from "./list/list.component";

@Component({
    selector: "atm-app",
    template: require("./app.component.html"),
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/list", component:ListComponent, name:"List", useAsDefault:true }    
])
export class AppComponent {
    
    message: string;
    
    constructor() {
        this.message = "Hello from a component";
    }
}
    