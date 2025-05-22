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
  authors: [{ name: "Ralph Alex Woiwode", url: "https://rawoiwode.ercel.app" }],
  creator: "Ralph Alex Woiwode",
  description:
    "Portfolio for Ralph Alex Woiwode – Front-End Developer focused on performance and design.",
  metadataBase: new URL("https://rawoiwode.vercel.app"),
  openGraph: {
    title: "RAWpertoire",
    description:
      "Portfolio for Ralph Alex Woiwode – Front-End Developer focused on performance and design.",
    url: "https://rawoiwode.vercel.app", // TODO: Update
    siteName: "RAWpertoire",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "RAWpertoire site preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  keywords: [
    "Ralph Woiwode",
    "Ralph Alex Woiwode",
    "RAW",
    "Front-End Developer",
    "React Developer",
    "Next.js Portfolio",
    "Tailwind CSS",
    "UI Engineer",
    "Web Developer",
  ],
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
