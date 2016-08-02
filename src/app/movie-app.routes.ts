import {RouterConfig, provideRouter} from "@angular/router";
import {MovieListComponent} from "./list/movie-list.component";
import {MovieAboutComponent} from "./about/movie-about.component";
import {MovieDetailComponent} from "./detail/movie-detail.component";
import {MovieEditComponent} from "./edit/movie-edit.component";
import {MovieNewComponent} from "./edit/movie-new.component";
import {aboutRoutes} from "./about/movie-about.component";

const routes: RouterConfig = [
    { path: "", component: MovieListComponent },
    { path: "about", component: MovieAboutComponent,
                     children: aboutRoutes },
    { path: "detail/:id", component: MovieDetailComponent },
    { path: "edit/:id", component: MovieEditComponent },    
    { path: "new", component: MovieNewComponent },
    { path: "**", redirectTo: "" }
];

export const APP_ROUTE_PROVIDERS = provideRouter(routes);