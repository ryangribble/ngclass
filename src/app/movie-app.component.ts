import {Component} from "@angular/core";

@Component({
    templateUrl: "./movie-app.component.html",
    selector: "movie-app"
})
export class MovieAppComponent {

    message: string;
    constructor() {
        this.message = "Hello, from MovieAppComponent";
    }

    changeMessage() {
        this.message = "This is a new message";
    }
}