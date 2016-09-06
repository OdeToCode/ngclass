import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MovieAppComponent} from "./movie-app.component";
import {MovieData} from "./services/moviedata.service";
import {HttpModule} from "@angular/http";

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [MovieAppComponent],
    providers: [MovieData],
    bootstrap: [MovieAppComponent]
})
export class MovieAppModule {

}
