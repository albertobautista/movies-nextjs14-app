import { getImagePath } from "@/lib/getImagePath";
import { Movie } from "@/typings";
import Image from "next/image";
import Link from "next/link";

type Props = {
  movie: Movie;
};
const MovieCard = ({ movie }: Props) => {
  return (
    <Link href={`/movie/details/${movie.id}`}>
      <div className="relative min-w-[200px] flex-shrink-0 cursor-pointer transform rounded-xl  hover:scale-105 transition duration-200 hover:drop-shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10  to-[#1A1C29] z-10 rounded-xl" />
        <p className="absolute z-20 text-white bottom-5 left-5">
          {movie.title}
        </p>
        <Image
          className="w-fit lg:min-w-[350px] h-56 object-cover object-center rounded-xl"
          src={getImagePath(movie.backdrop_path || movie.poster_path)}
          alt={movie.title || movie.id.toString()}
          width={1920}
          height={1080}
          key={movie.id}
        />
      </div>
    </Link>
  );
};

export default MovieCard;
