import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/metropolis";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Movies App",
  description: "Movies App using Nextjs 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-300 dark:bg-[#1A1C29]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="mt-20">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
