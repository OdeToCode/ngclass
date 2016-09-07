import {platformBrowserDynamic} from
        "@angular/platform-browser-dynamic";

import {MovieAppModule} from "./app/movie-app.module";

import "src/style/app.scss";

platformBrowserDynamic().bootstrapModule(MovieAppModule)
                        .then(() => console.log("bootstrapped!"),
                              (error) => console.log(error));
