export interface ImdbResponse {
  Response: string;
  Search: ImdbMovie[];
  totalResults: string;
}

export interface ImdbMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string
  imdbID: string;

}
