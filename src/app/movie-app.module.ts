import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {MovieAppComponent} from "./movie-app.component";
import {MovieDetailComponent} from "./details/moviedetail.component";
import {MovieListComponent} from "./list/movielist.component";
import {MovieData} from "./services/moviedata.service";
import {HttpModule} from "@angular/http";
import {routing} from "./movie-app.routing";
import {MovieSummaryComponent} from "./list/movie-summary.component";
import {MovieEditComponent} from "./edit/movieedit.component";

@NgModule({
    imports: [BrowserModule, 
             HttpModule, 
            RouterModule, 
            routing,
            FormsModule],
    declarations: [MovieAppComponent, 
                   MovieListComponent, 
                   MovieDetailComponent,
                   MovieSummaryComponent,
                   MovieEditComponent],
    providers: [MovieData],
    bootstrap: [MovieAppComponent]
})
export class MovieAppModule {

}
