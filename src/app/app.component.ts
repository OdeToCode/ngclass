import {Component} from "@angular/core";
import {RouteConfig, ROUTER_DIRECTIVES} 
    from "@angular/router-deprecated";
import {ListComponent} from "./list/list.component";
import {AboutComponent} from "./about/about.component";
import {DetailsComponent} from "./details/details.component";
import {EditComponent} from "./edit/edit.component";

@Component({
    selector: "atm-app",
    template: require("./app.component.html"),
    directives: [...ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/list", component:ListComponent, name:"List", useAsDefault:true },
    { path: "/about/...", component: AboutComponent, name:"About"},
    { path: "/details/:id", component:DetailsComponent, name:"Details"},
    { path: "/edit/:id", component:EditComponent, name:"Edit"}  
     
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
