import {bootstrap} from "angular2/platform/browser";
import {App} from "./app";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy, Router} from "angular2/router";
import {provide} from "angular2/core";
import {Counter, InMemoryCounter} from "./services/counter";

bootstrap(App, [
    ROUTER_PROVIDERS,
    provide(Counter, {useFactory: () => new InMemoryCounter(), deps:[]}),
]).then(ref => console.log("Running!"));

