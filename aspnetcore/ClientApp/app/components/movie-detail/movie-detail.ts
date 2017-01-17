import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
    selector: "movie-detail",
    templateUrl: "./movie-detail.html"
})
export class MovieDetailComponent {
    
    id: string;
    route: ActivatedRoute;
    router: Router;
    
    constructor(route: ActivatedRoute, router: Router) {
        this.route = route;
        this.route.params.subscribe(v => console.log(v));
        this.router = router;
    }

    ngOnInit() {
        this.id = this.route.snapshot.params["id"];
    }

    goToList() {        
        this.router.navigate(["/movies"]);
    }
}