import Link from "next/link";

/**
 * The NotFound component displays a custom 404 error page for unmatched routes.
 *
 * @component
 * @returns {JSX.Element} A styled 404 page with return navigation
 *
 * @author Ralph Woiwode
 * @version 0.1.0
 */

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
      <h1 className="text-primary animate-pulse text-6xl font-bold tracking-widest">
        404
      </h1>
      <p className="text-text/75 mt-4 text-lg">
        Hmm... that page doesn&apos;t exist.
      </p>
      <p className="text-text/50 mt-2 text-sm">
        Maybe the link is broken — or maybe you typed something funky.
      </p>
      <Link
        href="/"
        className="underline-link underline-link-hover mt-6 inline-block px-4 py-2 text-sm transition-all"
      >
        Go Back Home
      </Link>
    </main>
  );
};

export default NotFound;
