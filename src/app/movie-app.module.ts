import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {MovieAppComponent} from "./movie-app.component";
import {MovieDetailComponent} from "./details/moviedetail.component";
import {MovieListComponent} from "./list/movielist.component";
import {MovieData} from "./services/moviedata.service";
import {HttpModule} from "@angular/http";
import {routing} from "./movie-app.routing";

@NgModule({
    imports: [BrowserModule, HttpModule, RouterModule, routing],
    declarations: [MovieAppComponent, 
                   MovieListComponent, 
                   MovieDetailComponent],
    providers: [MovieData],
    bootstrap: [MovieAppComponent]
})
export class MovieAppModule {

}
