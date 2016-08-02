import {Component, OnInit} from "@angular/core";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {MovieData} from "../services/movies.service";
import {Movie} from "../models/movie";
import {MoviePanelComponent} from "./movie-panel.component";

@Component({
    templateUrl: "./movie-list.component.html",
    directives: [ROUTER_DIRECTIVES, MoviePanelComponent]
})
export class MovieListComponent implements OnInit {
    message: string = "At the movies";
    movies: Movie[] = [];

    constructor(private movieData: MovieData,
                private router: Router) {
    }

    ngOnInit() {
        this.movieData.getAll()
        .subscribe(movies => this.movies = movies,
                   error => console.log(error));
    }
}