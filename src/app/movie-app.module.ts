import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MovieAppComponent} from "./movie-app.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [MovieAppComponent],
    bootstrap: [MovieAppComponent]
})
export class MovieAppModule {

}
