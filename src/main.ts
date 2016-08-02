import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {HTTP_PROVIDERS} from "@angular/http";
import {MovieAppComponent} from "./app/movie-app.component";
import {MovieData} from "./app/services/movies.service";
import {APP_ROUTE_PROVIDERS} from "./app/movie-app.routes";

import "./style/app.scss";

bootstrap(MovieAppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    MovieData,
    HTTP_PROVIDERS,
    APP_ROUTE_PROVIDERS
]);