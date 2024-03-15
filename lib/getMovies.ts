import { Movie, SearchResults } from "@/typings";

async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "es-MX");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 25, //24 hours default
    },
  };

  const response = await fetch(url.toString(), options);
  // console.log("dta", response);

  const data = (await response.json()) as SearchResults;

  return data;
}

async function fetchFromTMDBSingle(url: URL, cacheTime?: number) {
  url.searchParams.set("include_adult", "false");
  url.searchParams.set("include_video", "false");
  url.searchParams.set("sort_by", "popularity.desc");
  url.searchParams.set("language", "en-US");
  url.searchParams.set("page", "1");

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 25, //24 hours default
    },
  };

  const response = await fetch(url.toString(), options);
  // console.log("dta", response);

  const data = (await response.json()) as Movie;

  return data;
}

export async function getUpcomingMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getTopRatedMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/top_rated");
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getPopularMovies() {
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  const data = await fetchFromTMDB(url);
  return data.results;
}
export async function getDiscoverMovies(id?: string, keywords?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/movie");

  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);

  const data = await fetchFromTMDB(url);
  return data.results;
}
export async function getMovieDetails(id?: string) {
  const url = new URL(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`
  );

  const data = await fetchFromTMDBSingle(url);
  return data;
}

export async function getSearchedMovies(term: string) {
  const url = new URL("https://api.themoviedb.org/3/search/movie");

  url.searchParams.set("query", term);

  const data = await fetchFromTMDB(url);
  return data.results;
}
export async function getPopularTVSeries() {
  const url = new URL("https://api.themoviedb.org/3/tv/popular");
  const data = await fetchFromTMDB(url);
  return data.results;
}
export async function getTopRatedTVSeries() {
  const url = new URL("https://api.themoviedb.org/3/tv/top_rated");
  const data = await fetchFromTMDB(url);
  return data.results;
}
export async function getDiscoverTVSeries(id?: string, keywords?: string) {
  const url = new URL("https://api.themoviedb.org/3/discover/tv");

  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);

  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function mergeMoviesAndTVSeries(
  movies: Movie[],
  tvSeries: Movie[]
) {
  const newMovies = movies.map((movie) => ({ ...movie, type: "Movie" }));
  const newTVSeries = tvSeries.map((tv) => ({ ...tv, type: "TV Serie" }));
  const results: Movie[] = [];

  // Determinar la longitud máxima de ambos arreglos
  const maxLength = Math.max(newMovies.length, newTVSeries.length);

  // Iterar sobre los arreglos intercalando los objetos
  for (let i = 0; i < maxLength; i++) {
    if (newMovies[i]) {
      results.push(newMovies[i]);
    }
    if (newTVSeries[i]) {
      results.push(newTVSeries[i]);
    }
  }
  return results;
}
