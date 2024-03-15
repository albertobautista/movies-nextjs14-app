"use client";

import { getImagePath } from "@/lib/getImagePath";
import { Movie } from "@/typings";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Props = {
  movies: Movie[];
};

Autoplay.globalOptions = { delay: 6000 };

const CarouselsBanner = ({ movies }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div className="relative overflow-hidden cursor-pointer" ref={emblaRef}>
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="relative min-w-0 flex-full">
            <Image
              key={movie.id}
              src={getImagePath(movie.backdrop_path, true)}
              alt={movie.title}
              width={1920}
              height={1080}
            />
            <div className="absolute top-0 left-0 hidden w-full h-full p-10 pt-40 mt-0 space-y-5 font-bold text-white bg-transparent bg-gradient-to-r from-gray-900/80 to-transparent md:inline xl:pt-60">
              <h2 className="text-xl text-orange-300 underline">
                {movie.type}
              </h2>
              <h3 className="z-40 max-w-xl text-5xl font-bold">
                {movie.title}
              </h3>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-blue-900/25 to-[#1A1C29]" />
    </div>
  );
};

export default CarouselsBanner;
