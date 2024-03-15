import { Genre } from "@/typings";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatToDollars(amount: number = 0): string {
  // Convert number to string and split it into integer and decimal parts
  const [integerPart, decimalPart] = amount.toFixed(2).split(".");

  // Add commas for thousands separator
  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  // Concatenate integer and decimal parts with a period separator
  return `$${formattedIntegerPart}.${decimalPart}`;
}

export function concatenateNames(genres: Genre[] = []): string {
  return genres.map((genre) => genre.name).join(", ");
}
