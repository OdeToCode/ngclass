var browser_1 = require("angular2/platform/browser");
var app_1 = require("./app");
var router_1 = require("angular2/router");
var core_1 = require("angular2/core");
var counter_1 = require("./services/counter");
var movie_data_1 = require("./services/movie-data");
var http_1 = require("angular2/http");
browser_1.bootstrap(app_1.App, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(counter_1.Counter, { useFactory: () => new counter_1.InMemoryCounter(), deps: [] }),
    movie_data_1.MovieData,
]).then(ref => console.log("Running!"));
