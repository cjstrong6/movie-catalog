import {RouterModule, Routes} from "@angular/router";
import {MovieSearchComponent} from "./movie-search/movie-search.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: MovieSearchComponent },
  { path: 'details/:imdbId', component: MovieDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
