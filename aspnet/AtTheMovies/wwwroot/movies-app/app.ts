import {Component} from "angular2/core";
import {Movie} from "./movie";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {List} from "./list/list";
import {About} from "./about/about";
import {Details} from "./details/details";
import {Edit} from "./edit/edit";

@Component({
    selector: "movies-app",
    templateUrl: "/movies-app/app.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/list", name:"List", component:List, useAsDefault:true},
    { path: "/about", name:"About", component:About },
    { path: "/details/:id", name: "Details", component: Details },
    { path: "/edit/:id", name: "Edit", component: Edit },
    { path: "/create", name:"Create", component: Edit }
])
export class App {

        
}