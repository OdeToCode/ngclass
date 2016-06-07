import {Component, provide} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} 
    from "@angular/router-deprecated";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ListComponent} from "./list/list.component";
import {AboutComponent} from "./about/about.component";
import {DetailsComponent} from "./details/details.component";

@Component({
    selector: "atm-app",
    template: require("./app.component.html"),
    directives: [...ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/list", component:ListComponent, name:"List", useAsDefault:true },
    { path: "/about/...", component: AboutComponent, name:"About"},
    { path: "/details/:id", component:DetailsComponent, name:"Details"}    
])
export class AppComponent {  
    
    message: string;
   
    constructor() {
        this.message = "Hello from a component";
    }
    
    changeMessage($event) {
        this.message = $event.target.value;
    }
}
    