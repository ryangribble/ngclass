import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, Validators} from "@angular/forms";
import {MovieData} from "../services/movies.service";
import {Movie} from "../models/movie";

@Component({
    templateUrl: "./movie-edit.component.html",
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class MovieEditComponent implements OnInit {
    title: FormControl;
    rating: FormControl;
    length: FormControl;
    form: FormGroup;
    id: number;

    constructor(private movieData: MovieData,
                private route: ActivatedRoute,
                private router: Router) {
        this.title = new FormControl("", Validators.required);
        this.rating = new FormControl();
        this.length = new FormControl();
        this.form = new FormGroup({
            title: this.title,
            length: this.length,
            rating: this.rating
        });
    }

    ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.movieData.getById(id)
        .subscribe(movie => {
            this.id = movie.id;
            this.title.updateValue(movie.title);
            this.length.updateValue(movie.length);
            this.rating.updateValue(movie.rating);
        },
        error => console.log(error));
    }

    save() {
        let values = this.form.value;
        let movie = new Movie(this.id, values.title, values.length, values.rating);
        this.movieData.update(movie)
        .subscribe(
            m => this.router.navigate(['detail', m.id]),
            error => console.log(error));
    }
}