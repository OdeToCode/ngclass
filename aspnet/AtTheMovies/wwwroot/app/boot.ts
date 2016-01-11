import {bootstrap} from "angular2/platform/browser"
import {provide} from "angular2/core";
import {MovieApp} from "./app";
import {ROUTER_PROVIDERS,
        LocationStrategy, HashLocationStrategy} from "angular2/router";
import {MovieData} from "./movies/movie-data";

bootstrap(MovieApp, 
    [ROUTER_PROVIDERS,
    MovieData,
    provide(LocationStrategy, {useClass: HashLocationStrategy})]);



