import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  const movies = await getDiscoverMovies(id);
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col mt-32 space-y-5 xl:mt-42">
        <h1 className="px-10 text-3xl font-bold">Results for: {genre}</h1>
      </div>
      <MoviesCarousel movies={movies} title="Genre" isVertical />
    </div>
  );
}

export default GenrePage;
