export type Company = {
  id: string;
  logo_path: string;
  name: string;
  origin_country: string;
};
export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  production_companies: Company[];
  type: string;
  budget: number;
  status: string;
  genres: Genre[];
  runtime: number;
  name: string;
};

export type SearchResults = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};
export type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: Genre[];
};
