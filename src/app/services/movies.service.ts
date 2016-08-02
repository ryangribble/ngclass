import {Http, Response, RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {Movie} from "../models/movie";

const apiUrl = "http://otc-movies.azurewebsites.net/api/movies/";

const responseToJson = (response: Response) => response.json();
const jsonToMovie = (json: any) => new Movie(json.id, json.title, json.length, json.rating);

const jsonHeaders = new Headers({
    "Content-Type": "application/json"
});

const jsonOptions = new RequestOptions({headers: jsonHeaders});

@Injectable()
export class MovieData {

    constructor(private http: Http) {
    }

    getAll(): Observable<Movie[]> {
        return this.http.get(apiUrl)
                .map(responseToJson)
                .map(movies => movies.map(jsonToMovie));
    }

    getById(id: number): Observable<Movie> {
        return this.http.get(`${apiUrl}${id}`)
                .map(responseToJson)
                .map(jsonToMovie);
    }

    create(movie: Movie) {
        return this.http.post(apiUrl, JSON.stringify(movie), jsonOptions)
                   .map(responseToJson)
                   .map(jsonToMovie);
    }

    update(movie: Movie) {
        return this.http.put(apiUrl, JSON.stringify(movie), jsonOptions)
                   .map(responseToJson)
                   .map(jsonToMovie);
    }
}