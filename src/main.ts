import {bootstrap} from "@angular/platform-browser-dynamic";
import {HTTP_PROVIDERS} from "@angular/http";
import {MovieAppComponent} from "./app/movie-app.component";
import {MovieData} from "./app/services/movies.service";
import {APP_ROUTE_PROVIDERS} from "./app/movie-app.routes";

import "./style/app.scss";

bootstrap(MovieAppComponent, [
    MovieData,
    HTTP_PROVIDERS,
    APP_ROUTE_PROVIDERS
]);