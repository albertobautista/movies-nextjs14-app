import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getPopularMovies,
  getPopularTVSeries,
  getTopRatedMovies,
  getTopRatedTVSeries,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();
  const popularTVSeries = await getPopularTVSeries();
  const topRatedTVSeries = await getTopRatedTVSeries();

  return (
    <main className="">
      {/* Carousel */}
      <CarouselBannerWrapper />
      <div className="flex flex-col mt-10">
        <h1 className="px-10 text-4xl tracking-wider">Movies</h1>
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
      <div className="flex flex-col mt-7">
        <h1 className="px-10 text-4xl tracking-wider">TV Series</h1>

        <MoviesCarousel movies={popularTVSeries} type="tv" title="Popular" />
        <MoviesCarousel movies={topRatedTVSeries} type="tv" title="Top Rated" />
      </div>
    </main>
  );
}
