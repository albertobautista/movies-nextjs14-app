import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};
async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col mt-32 space-y-5 xl:mt-42">
        <h1 className="px-10 text-6xl font-bold">Results for: {termToUse}</h1>
        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel title="Yo may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
