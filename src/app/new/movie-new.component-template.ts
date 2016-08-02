import {Component} from "@angular/core";
import {NgForm, REACTIVE_FORM_DIRECTIVES} from "@angular/forms";
import {Router} from "@angular/router";
import {Movie} from "../models/movie";
import {MovieData} from "../services/movies.service";

@Component({
    templateUrl: "./movie-new.component-template.html",
    directives: REACTIVE_FORM_DIRECTIVES
})
export class MovieNewTemplateComponent {
    movie: Movie = new Movie(0, "", 100, 3);

    constructor(private router: Router, private movieData: MovieData) {
    }

    save(form: NgForm) {
        if (form.valid) {
            this.movieData.create(this.movie)
                .subscribe(
                    movie => this.router.navigate(['detail', movie.id]),
                    error => console.log(error));
        }
    }
}