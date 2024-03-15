import { getImagePath } from "@/lib/getImagePath";
import { getMovieDetails } from "@/lib/getMovies";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};
const MovieDetails = async ({ params: { id } }: Props) => {
  const movie = await getMovieDetails(id);
  console.log(movie);
  return (
    <div className="flex flex-col mx-auto max-w-7xl">
      <h1>{movie.title}</h1>
      <Image
        className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-lg rounded-sm"
        src={getImagePath(movie.backdrop_path)}
        alt={movie.title}
        width={1920}
        height={1080}
      />
      <span>{movie.overview}</span>
      {movie.production_companies.map((company) => (
        <div key={company.id}>
          <h2>{company.name}</h2>
          <h3>{company.origin_country}</h3>
          <Image
            className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-gray-900 drop-shadow-lg rounded-sm"
            src={getImagePath(company.logo_path)}
            alt={movie.title}
            width={1920}
            height={1080}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieDetails;
