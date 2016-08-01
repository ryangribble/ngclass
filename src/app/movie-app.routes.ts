import {RouterConfig, provideRouter} from "@angular/router";
import {MovieListComponent} from "./list/movie-list.component";
import {MovieAboutComponent} from "./about/movie-about.component";
import {MovieDetailComponent} from "./detail/movie-detail.component";
import {aboutRoutes} from "./about/movie-about.routes";

// / -> display a list of movies
// /about -> about page
// /detail/1 -> detail the movie with an id of 1

const routes: RouterConfig = [
    { path: "", component: MovieListComponent },
    { path: "about",
      component: MovieAboutComponent,
      children: aboutRoutes },
    { path: "detail/:id", component: MovieDetailComponent },
    { path: "**", redirectTo: "" }
];

export const APP_ROUTE_PROVIDERS = provideRouter(routes);