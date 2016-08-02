import {Component} from "@angular/core";
import {RouterConfig, ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    template: "This is the phone information...."
})
class MovieAboutPhoneComponent {
}

@Component({
    template: "This is the location map ...."
})
class MovieAboutLocationComponent {

}

export const aboutRoutes: RouterConfig = [
    {path: "phone", component: MovieAboutPhoneComponent},
    {path: "location", component: MovieAboutLocationComponent },
    { path: "**", redirectTo: "location"}
];

@Component({
    templateUrl: "./movie-about.component.html",
    directives: [ROUTER_DIRECTIVES]
})
export class MovieAboutComponent {

}