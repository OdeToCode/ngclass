var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("rxjs/operator/map");
var browser_1 = require("angular2/platform/browser");
var core_1 = require("angular2/core");
var http_1 = require("angular2/http");
var App = (function () {
    function App(http) {
        this.http = http;
    }
    App.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("/movies")
            .map(function (r) { return r.json(); })
            .subscribe(function (movies) { return _this.showMovies(movies); });
    };
    App.prototype.showMovies = function (movies) {
        this.movies = movies;
    };
    App = __decorate([
        core_1.Component({
            selector: "movies-app",
            templateUrl: "/app/app.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], App);
    return App;
})();
browser_1.bootstrap(App, [http_1.HTTP_PROVIDERS]);
