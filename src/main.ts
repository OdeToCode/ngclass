import {AppComponent} from "./app/app.component";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";
import "./style/styles.css";

const onError = function(reason) {
  console.log(reason);  
};

bootstrap(AppComponent, [ROUTER_PROVIDERS])
    .catch(onError);
