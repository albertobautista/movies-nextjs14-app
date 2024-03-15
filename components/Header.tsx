import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToogler";
import SearchInput from "./ui/SearchInput";
import GenreDropdown from "./GenreDropdown";

const Header = () => {
  return (
    <header className="flex justify-between p-5  fixed w-full z-20 top-0 items-center ">
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="Disney Logo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
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
