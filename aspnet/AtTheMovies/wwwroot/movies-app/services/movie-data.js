var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("angular2/http");
var movie_1 = require("../movie");
var core_1 = require("angular2/core");
require("rxjs/add/operator/map");
let parseResponse = (response) => response.json();
let MovieData = class {
    constructor(http) {
        this.http = http;
        this._baseUrl = "/movies";
    }
    getById(id) {
        return this.http.get(`${this._baseUrl}/${id}`)
            .map(parseResponse)
            .map(movie => new movie_1.Movie(movie.id, movie.title, movie.rating, movie.length));
    }
    getAll() {
        return this.http.get(this._baseUrl)
            .map(parseResponse)
            .map(array => array.map(o => new movie_1.Movie(o.id, o.title, o.rating, o.length)));
    }
};
MovieData = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], MovieData);
exports.MovieData = MovieData;
// export abstract class MovieData
// {
//     abstract getAll(): Observable<Movie[]>;
//     abstract getById(id: number): Observable<Movie>;
// }
// export class HttpMovieData implements MovieData
// {
//     constructor(private http: Http)
//     {
//         
//     }
//     
//     getById(id) {
//         
//     }
//     
//     getAll() {
//         return this.http.get("/movies")
//                  
//     }
// }
// @Injectable()
// export class InMemoryMovieData implements MovieData
// {
//     private movies: Movie[];
//     
//     constructor(private http: Http) {
//                              
//         this.movies = [
//             new Movie(1, "Star Wars", 5, 120),
//             new Movie(2, "Star Trek", 5, 100),
//             new Movie(3, "Starship Troopers", 3, 90)
//         ];
//     }
//     
//     getById(id: number) {
//         for(let movie of this.movies) {
//             if(movie.id == id) {
//                return Observable.just(movie);
//             }
//         }
//         return null;
//     }
//     
//     getAll() {
//         return Observable.from(this.movies, null) 
//     }
// } 
