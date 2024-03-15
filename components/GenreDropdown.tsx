import { Genres } from "@/typings";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const GenreDropdown = async () => {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      revalidate: 60 * 60 * 25, //24 hours
    },
  };
  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center justify-center dark:text-white">
        Genre <ChevronDownIcon className="ml-1" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Select a genre</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {data.genres.map((genre) => (
          <Link key={genre.id} href={`/genre/${genre.id}?genre=${genre.name}`}>
            <DropdownMenuItem className="cursor-pointer">
              {genre.name}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default GenreDropdown;
