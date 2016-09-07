import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {MovieListComponent} from "./list/movielist.component";
import {MovieDetailComponent} from "./details/moviedetail.component";
import {MovieEditComponent} from "./edit/movieedit.component";

const routes: Routes = [
    { path: "", component: MovieListComponent },
    { path: "details/:id", component: MovieDetailComponent },
    { path: "edit/:id", component: MovieEditComponent},
    { path: "**", redirectTo: ""}
];

export const routing: ModuleWithProviders = 
    RouterModule.forRoot(routes);
