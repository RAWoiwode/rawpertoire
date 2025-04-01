import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import SideNav from "./components/SideNav";
import "./globals.css";

/* Chosen font for most of the site */
const noto_sans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

/**
 * Metdata for the application, used to configure SEO and document headers
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: "RAWpetoire",
  description: "Portfolio for Ralph Woiwode",
};

/**
 * The RootLayout component serves as the global layour for the app
 *
 * It provides a responsive structure w/:
 * - Global font styling
 * - Side navigation for desktop
 * - Dynamic content rendering
 *
 * TODO: Update Metatags for each page
 *
 * @component
 * @returns {JSX.Element} The layout structure of the app
 *
 * @author Ralph Woiwode
 * @version 0.4.0
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className={noto_sans.className}>
      <body className="bg-background/90 text-text">
        <div className="bg-background/80 mx-auto flex max-w-screen-xl justify-evenly lg:min-h-screen">
          <SideNav />
          <main className="flex flex-col space-y-4 py-24 pr-16 pl-4 lg:w-[50%] lg:px-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
