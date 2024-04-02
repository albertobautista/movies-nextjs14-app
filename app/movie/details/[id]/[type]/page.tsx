import InfoBox from "@/components/InfoBox";
import { getImagePath } from "@/lib/getImagePath";
import { getMovieDetails } from "@/lib/getMovies";
import { concatenateNames, formatToDollars } from "@/lib/utils";
import Image from "next/image";
import { convertMinutesToHours } from "../../../../../lib/utils";

type Props = {
  params: {
    id: string;
    type: string;
  };
};
const MovieDetails = async ({ params: { id, type } }: Props) => {
  const movie = await getMovieDetails(id, type);
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
          <div className="static top-0 left-0 w-full h-full max-w-4xl p-5 mt-0 space-y-5 font-bold text-white bg-transparent md:absolute md:bg-gradient-to-r md:from-gray-900/80 md:to-transparent md:inline xl:pt-40">
            <div className="flex flex-col gap-5">
              <h3 className="z-40 font-bold text-7xl">{movie.title}</h3>
              <p className="text-xl">{movie.overview}</p>
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                <div className="flex flex-col gap-2 md:flex-row">
                  <h3 className="text-md">{movie.release_date}</h3>{" "}
                  <span className="hidden md:block">•</span>
                  <h3 className="text-md">
                    {convertMinutesToHours(movie.runtime)}
                  </h3>
                  <span className="hidden md:block">•</span>{" "}
                  {concatenateNames(movie.genres)}
                </div>
                <div className="flex gap-2 my-3">
                  <InfoBox value={"★" + " " + movie.vote_average.toFixed()} />
                  <InfoBox value="HD" />
                  <InfoBox value={movie.original_language} />
                </div>
                <p className="order-1 text-lg lg:order-none">
                  Budget:{" "}
                  <span className="text-yellow-400">
                    {formatToDollars(movie?.budget)}
                  </span>
                </p>
                <p className="text-lg ">
                  Status: <span className="text-green-600">{movie.status}</span>
                </p>

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
        </div>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-blue-900/25 to-[#1A1C29]" /> */}
    </div>
  );
};

export default MovieDetails;
