import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, HashLocationStrategy, LocationStrategy} from "angular2/router";
import {provide} from 'angular2/core';
import {MovieApp} from "./app";
import {MovieData} from "./movie/movie-data";

bootstrap(MovieApp, 
    [ROUTER_PROVIDERS, 
    provide(MovieData, {useClass: MovieData}),
    provide("SomeValue", {useValue: "This is some random value to inject!"}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})])
        .then(() => console.log('MovieApp bootsrapped!'));