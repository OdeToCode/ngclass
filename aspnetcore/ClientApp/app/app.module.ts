import { NgModule } from '@angular/core';
import { RouterModule, CanActivate, CanDeactivate } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {MovieDetailComponent} from "./components/movie-detail/movie-detail";

import { MovieListComponent, MoviePanelComponent} 
    from './components/movie-list';


export class CounterRouteGuard implements CanActivate, CanDeactivate<CounterComponent> {
    canActivate() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(true), 2000)
        });
    }

    canDeactivate(component: CounterComponent) {
        return !component.isDirty();
    }
}


@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        MovieListComponent, MoviePanelComponent, MovieDetailComponent
    ],
    providers: [CounterRouteGuard],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent, 
                    canActivate: [CounterRouteGuard], canDeactivate:[CounterRouteGuard]},
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'movies', component: MovieListComponent },
            { path: 'movies/detail/:id', component: MovieDetailComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}


