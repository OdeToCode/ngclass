import {AppComponent} from "./app/app.component";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import {MovieService} from "./app/services/movies.service";
import {HTTP_PROVIDERS} from "@angular/http";
import {provide} from "@angular/core";
import "./style/styles.css";

const onError = function(reason) {
  console.log(reason);  
};

bootstrap(AppComponent, [
    ROUTER_PROVIDERS, 
    HTTP_PROVIDERS,
    provide(MovieService, { useClass: MovieService })
  ])
    .catch(onError);
