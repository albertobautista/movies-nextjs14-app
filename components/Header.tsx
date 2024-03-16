import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToogler";
import SearchInput from "./ui/SearchInput";
import GenreDropdown from "./GenreDropdown";

const Header = () => {
  return (
    <header className="flex justify-center flex-wrap sm:justify-between p-5 pl-10 bg-gray-300 dark:bg-[#1A1C29] fixed w-full z-50 top-0 items-center ">
      <Link href="/" className="flex items-center justify-center gap-2 mr-10">
        <Image
          src="/movieIcon.svg"
          alt="Movies logo"
          width={50}
          height={50}
          className="cursor-pointer invert-0 dark:invert"
        />
        <h1 className="text-2xl tracking-wider uppercase cursor-pointer dark:text-yellow-500">
          Movies
        </h1>
      </Link>
      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
