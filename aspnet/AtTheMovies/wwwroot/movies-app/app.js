var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var list_1 = require("./list/list");
var about_1 = require("./about/about");
var details_1 = require("./details/details");
let App = class {
};
App = __decorate([
    core_1.Component({
        selector: "movies-app",
        templateUrl: "/movies-app/app.html",
        directives: [router_1.ROUTER_DIRECTIVES]
    }),
    router_1.RouteConfig([
        { path: "/list", name: "List", component: list_1.List, useAsDefault: true },
        { path: "/about", name: "About", component: about_1.About },
        { path: "/details/:id", name: "Details", component: details_1.Details }
    ]), 
    __metadata('design:paramtypes', [])
], App);
exports.App = App;
