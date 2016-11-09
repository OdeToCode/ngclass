import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule} from "@angular/forms";
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import {MovieDetailComponent} from "./components/movieDetail/movieDetail.component";
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import {MovieData} from "./models";

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        MovieDetailComponent,
        HomeComponent
    ],
    providers:[MovieData],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'movie/:id', component: MovieDetailComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
