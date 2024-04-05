import { Movie } from "@/typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
  type?: "movie" | "tv";
};

const MoviesCarousel = ({
  title,
  movies,
  isVertical,
  type = "movie",
}: Props) => {
  return (
    <div className="z-40">
      <h2 className="px-5 md:px-10  py-1 text-xl font-bold text-gray-300">
        {title}
      </h2>
      <div
        className={cn(
          "flex overflow-scroll scrollbar-hide px-5 gap-5 lg:px-10 py-5",
          isVertical && "flex-col space-y-12 space-x-0"
        )}
      >
        {isVertical
          ? movies.map((movie) => (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                )}
              >
                <MovieCard movie={movie} type={type} />
                <div className="max-w-2xl">
                  <p className="font-bold">
                    {movie.title} ({movie.release_date?.split("-")[0]})
                  </p>
                  <hr className="mb-3" />
                  <p className="">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} type={type} />
            ))}
      </div>
    </div>
  );
};

export default MoviesCarousel;
