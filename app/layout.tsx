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
 * Metdata for the application, used to configure SEO and document headers.
 *
 * @constant
 * @type {Metadata}
 */
export const metadata: Metadata = {
  title: "RAWpetoire",
  description: "Portfolio for Ralph Woiwode",
};

/**
 * The RootLayout component defines the global layout structure of the app.
 *
 * TODO: Update Metatags
 *
 * @component
 * @returns {JSX.Element} The global layout wrapper for all routes
 *
 * @author Ralph Woiwode
 * @version 0.4.5
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className={noto_sans.className} suppressHydrationWarning>
      <body className="bg-background text-text/75">
        <div className="mx-auto flex max-w-screen-xl justify-evenly lg:min-h-screen">
          <SideNav />
          <main
            role="main"
            className="flex flex-col space-y-4 px-8 py-20 md:px-16 lg:w-[50%] lg:px-0"
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
