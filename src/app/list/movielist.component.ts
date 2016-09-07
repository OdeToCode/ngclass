import {Component} from "@angular/core";
import {Movie} from "../models/movie";
import {MovieData} from '../services/moviedata.service';
import {OnInit} from "@angular/core";

@Component({
    templateUrl: "./movielist.component.html"
})
export class MovieListComponent implements OnInit {
    movies: Movie[];

    constructor(private movieData: MovieData) {
        
       
    }

    ngOnInit() {
        this.movieData.getAll()
                 .subscribe(movies => this.movies = movies,
                            error => console.log(error)); 
    }

    getMovieUrl(movie: Movie) {
        return `/details/${movie.id}`;
    }

    rateMovie(movie: Movie) {
        return {
            good: movie.rating >= 4,
            bad: movie.rating <= 2
        };
    }

}
