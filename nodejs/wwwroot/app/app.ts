import {Component} from "angular2/core";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {List} from "./movie/list";
import {About} from "./about/about";
import {Movie} from './movie/movie';
import {Detail} from "./movie/detail";

// component must have at least selector and template
@Component({
  selector: 'movie-app',
  //template: '<div>{{message}}</div>',
  templateUrl: '/app/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: "/list", name: "List", component: List, useAsDefault: true},
    { path: "/about", name: "About", component: About },
    {path: "/detail/:id", name: "Detail", component: Detail}
])
export class MovieApp {
    /**
     * Main app
     */
    title: string;
    
    constructor() {
        this.title = "At the Movies";
    }
}