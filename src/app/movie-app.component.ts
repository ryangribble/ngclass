import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    templateUrl: "./movie-app.component.html",
    selector: "movie-app",
    directives: [ROUTER_DIRECTIVES]
})
export class MovieAppComponent {

    message: string = "At the movies";
}