import {bootstrap} from "@angular/platform-browser-dynamic";
import {MovieAppComponent} from "./app/movie-app.component";
import {MovieData} from "./app/services/movies.service";

bootstrap(MovieAppComponent, [
    MovieData
]);