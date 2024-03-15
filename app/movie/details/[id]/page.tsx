import { getImagePath } from "@/lib/getImagePath";
import { getMovieDetails } from "@/lib/getMovies";
import { concatenateNames, formatToDollars } from "@/lib/utils";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};
const MovieDetails = async ({ params: { id } }: Props) => {
  const movie = await getMovieDetails(id);

  return (
    <div className="relative overflow-hidden">
      <div className="flex">
        <div className="relative min-w-0 flex-full">
          <Image
            key={movie.id}
            src={getImagePath(movie.backdrop_path, true)}
            alt={movie.title}
            width={1920}
            height={1080}
          />
          <div className="absolute top-0 left-0 hidden w-full h-full max-w-4xl pt-0 mt-0 space-y-5 font-bold text-white bg-transparent p-14 bg-gradient-to-r from-gray-900/80 to-transparent md:inline xl:pt-40">
            <h3 className="z-40 font-bold text-7xl">{movie.title}</h3>
            <p className="text-xl">{movie.overview}</p>
            <p className="text-lg">
              Budget:{" "}
              <span className="text-yellow-400">
                {formatToDollars(movie?.budget)}
              </span>
            </p>
            <p className="text-lg">
              Status: <span className="text-green-600">{movie.status}</span>
            </p>
            <div className="flex gap-1">
              <h4>Genres:</h4>
              {concatenateNames(movie.genres)}
            </div>
            <div className="flex flex-col ">
              <h4>Production Companies:</h4>
              <ul className="">
                {movie.production_companies?.map((company) => (
                  <li key={company.id}>- {company.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-blue-900/25 to-[#1A1C29]" /> */}
    </div>
  );
};

export default MovieDetails;
