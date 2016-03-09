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
var movie_data_1 = require("../services/movie-data");
var star_pipe_1 = require("./star-pipe");
let List = class {
    constructor(router, movieData) {
        this.router = router;
        this.movieData = movieData;
        movieData.getAll()
            .subscribe(result => this.movies = result, error => console.log(error));
    }
    getIterableForMovieRating(movie) {
        var thing = [];
        for (let i = 0; i < movie.rating; i++) {
            thing.push(i);
        }
        return thing;
    }
    goToDetails(movie) {
        let id = movie.id;
        this.router.navigate(['Details', { id: movie.id }]);
    }
};
List = __decorate([
    core_1.Component({
        templateUrl: "/movies-app/list/list.html",
        directives: router_1.ROUTER_DIRECTIVES,
        providers: [],
        pipes: [star_pipe_1.StarPipe]
    }), 
    __metadata('design:paramtypes', [router_1.Router, movie_data_1.MovieData])
], List);
exports.List = List;
