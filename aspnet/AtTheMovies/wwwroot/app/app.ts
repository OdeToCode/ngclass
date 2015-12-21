import {bootstrap} from "angular2/platform/browser";
import {Component, OnInit} from "angular2/core"
import {Http, HTTP_PROVIDERS} from "angular2/http";

import "rxjs/add/operator/map";

@Component({
	selector: "movies-app",
	templateUrl: "/app/app.html"
})
class App implements OnInit {
	
	movies: Array<any>
	constructor(public http: Http) {}
	
	ngOnInit() {
		this.http.get("/movies")
			.map(r => r.json())
			.subscribe(movies => this.showMovies(movies))	
	}
	
	private showMovies(movies) {
		this.movies = movies;
	}
}

bootstrap(App, [HTTP_PROVIDERS]);

