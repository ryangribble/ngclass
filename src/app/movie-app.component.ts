import {Component} from "@angular/core";
import {MovieData} from "./services/movies.service";
import {Movie} from "./models/movie";

@Component({
    templateUrl: "./movie-app.component.html",
    selector: "movie-app"
})
export class MovieAppComponent {

    movies: Movie[] = [];

    constructor(private movieData: MovieData) {
        this.movies = movieData.getAll();
    }

    rateMovie(movie: Movie) {
        let result = "#000000";
        if (movie.rating > 4) {
            result = "#00ff00";
        } else if (movie.rating < 2) {
            result = "#ff0000";
        }
        return result;
    }
}