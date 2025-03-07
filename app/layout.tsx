import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import { Suspense } from "react";

import SideNav from "./components/SideNav";
import Experience from "./experience/page";
import "./globals.css";
import Loading from "./loading";
import Home from "./page";
import Projects from "./projects/page";

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
 * @component
 * @returns {JSX.Element} The layout structure of the app
 *
 * @author Ralph Woiwode
 * @version 0.2.0
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className={noto_sans.className}>
      <body className="bg-background-200/50 text-text-950 lg:mx-auto lg:flex lg:min-h-screen lg:p-4">
        <SideNav />
        <main className="flex flex-col justify-center space-y-4 overflow-auto py-6 lg:w-5/6">
          <Suspense fallback={<Loading />}>
            {/* Desktop */}
            <div className="hidden lg:block">{children}</div>
            {/* Mobile */}
            <div className="lg:hidden">
              <Home />
              <Experience />
              <Projects />
            </div>
          </Suspense>
        </main>
      </body>
    </html>
  );
}
