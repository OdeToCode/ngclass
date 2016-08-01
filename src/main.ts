import {bootstrap} from "@angular/platform-browser-dynamic";
import {MovieAppComponent} from "./app/movie-app.component";
import {MovieData} from "./app/services/movies.service";
import {APP_ROUTE_PROVIDERS} from "./app/movie-app.routes";
import "./style/app.scss";

bootstrap(MovieAppComponent, [
    MovieData,
    APP_ROUTE_PROVIDERS
]);