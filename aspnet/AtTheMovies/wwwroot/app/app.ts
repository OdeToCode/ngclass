import {Component} from "angular2/core";
import {List} from "./movies/list";
import {About} from "./about/about";
import {Detail} from "./movies/detail";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

@Component({
    selector: "movie-app",    
    templateUrl: "/app/app.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/list", component:List, name: "List", useAsDefault:true},
    { path: "/about", component:About, name:"About"},
    { path:"/detail/:id", component:Detail, name:"Detail"}
])
export class MovieApp {
    public title: string = "At The Movies!";
}