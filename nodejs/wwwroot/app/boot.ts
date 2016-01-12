import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {provide} from 'angular2/core';
import {MovieApp} from "./app";
import {MovieData} from "./movie/movie-data";

bootstrap(MovieApp, 
    [ROUTER_PROVIDERS, 
    provide(MovieData, {useClass: MovieData}),
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})])
        .then(() => console.log('MovieApp bootsrapped!'));