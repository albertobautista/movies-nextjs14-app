import {
  getDiscoverMovies,
  getDiscoverTVSeries,
  mergeMoviesAndTVSeries,
} from "@/lib/getMovies";
import CarouselsBanner from "./CarouselsBanner";

type Props = {
  id?: string;
  keywords?: string;
};

const CarouselBannerWrapper = async ({ id, keywords }: Props) => {
  const tvSeries = await getDiscoverTVSeries(id, keywords);
  const movies = await getDiscoverMovies(id, keywords);

  return <CarouselsBanner movies={movies} />;
};

export default CarouselBannerWrapper;
