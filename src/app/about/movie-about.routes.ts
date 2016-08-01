import {RouterConfig} from "@angular/router";
import {MovieAboutPhoneComponent} from "./phone/movie-about-phone";
import {MovieAboutLocationComponent} from "./location/movie-about-location";

export const aboutRoutes: RouterConfig = [
    { path: "phone", component: MovieAboutPhoneComponent },
    { path: "location", component: MovieAboutLocationComponent }
];