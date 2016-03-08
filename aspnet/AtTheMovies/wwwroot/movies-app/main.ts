import {bootstrap} from "angular2/platform/browser";
import {App} from "./app";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Router} from "angular2/router";
import {provide} from "angular2/core";
import {Counter, InMemoryCounter } from "./services/counter";
import {MovieData} from "./services/movie-data";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(App, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(Counter, {useFactory: () => new InMemoryCounter(), deps:[]}),
    MovieData,
]).then(ref => console.log("Running!"));

