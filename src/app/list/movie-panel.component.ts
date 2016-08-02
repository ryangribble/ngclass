import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Movie} from "../models/movie";

@Component({
    selector: "movie-panel",
    templateUrl: "./movie-panel.component.html",
    directives: [ROUTER_DIRECTIVES]
})
export class MoviePanelComponent {
    @Input() movie: Movie;
    @Output() navigate = new EventEmitter<number>();

    constructor() {
    }

    goToMovie() {
        this.navigate.emit(this.movie.id);
    }

    rateMovie(movie: Movie) {
        const result = {
            good: false,
            bad: false
        };

        if (movie.rating > 4) {
            result.good = true;
        } else if (movie.rating < 2) {
            result.bad = true;
        }

        return result;
    }
}