import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Movie} from "../models/movie";
import {MovieData} from "../services/movies.service";

@Component({
    templateUrl: "./movie-new.component-model.html"
})
export class MovieNewModelComponent {
    title: FormControl;
    rating: FormControl;
    length: FormControl;
    form: FormGroup;

    constructor(private router: Router, private movieData: MovieData) {
        this.title = new FormControl("", Validators.required);
        this.rating = new FormControl();
        this.length = new FormControl();
        this.form = new FormGroup({
            title: this.title,
            length: this.length,
            rating: this.rating
        });
    }

    save() {
        if (this.form.valid) {
            let movie = new Movie(0, this.title.value, this.length.value, this.rating.value);
            this.movieData.create(movie)
                .subscribe(
                    movie => this.router.navigate(['detail', movie.id]),
                    error => console.log(error));
        }
    }
}