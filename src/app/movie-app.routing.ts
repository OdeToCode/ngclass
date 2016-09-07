import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {MovieListComponent} from "./list/movielist.component";
import {MovieDetailComponent} from "./details/moviedetail.component";

const routes: Routes = [
    { path: "", component: MovieListComponent },
    { path: "details/:id", component: MovieDetailComponent }
];

export const routing: ModuleWithProviders = 
    RouterModule.forRoot(routes);
