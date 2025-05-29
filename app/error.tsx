"use client";

/**
 * The Error component renders when a server-side error occurs.
 *
 * @component
 * @returns {JSX.Element} A styled 500 fallback UI
 *
 * @author Ralph Woiwode
 * @version 1.0.0
 */

const Error = (): JSX.Element => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
      <h1 className="text-primary animate-pulse text-5xl font-bold tracking-widest">
        500
      </h1>
      <p className="text-text/75 mt-4 text-lg">Something went wrong.</p>
      <p className="text-text/50 mt-2 max-w-md text-sm">
        The site encountered an unexpected error. It might be temporary, or
        there may be an issue on our end.
      </p>
      <a
        href="/"
        className="underline-link underline-link-hover mt-6 inline-block px-4 py-2 text-sm transition-all"
      >
        Go Home
      </a>
    </main>
  );
};

export default Error;
