import {Component} from "@angular/core";
import {MovieData} from "./services/movies.service";
import {Movie} from "./models/movie";

@Component({
    templateUrl: "./movie-app.component.html",
    selector: "movie-app"
})
export class MovieAppComponent {

    message: string = "At the movies";
    movies: Movie[] = [];

    constructor(private movieData: MovieData) {
        this.movies = movieData.getAll();
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