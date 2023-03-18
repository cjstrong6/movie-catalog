import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {Movie} from "./movie";
import {ImdbResponse} from "./imdb-response";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/';
  private apiKey = 'c6ffda6d';
  constructor(private http: HttpClient) {}
  searchMovies(query: string): Observable<ImdbResponse> {
    const url = `${this.apiUrl}?apikey=${this.apiKey}&s=${query}&type=movie`;
    return this.http.get<ImdbResponse>(url);
  }

  getMovieDetails(imdbId: string | null): Observable<any>{
    const url = `${this.apiUrl}?apikey=${environment.apiKey}&i=${imdbId}`;
    return this.http.get(url);
  }
}
