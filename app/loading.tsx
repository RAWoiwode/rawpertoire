/**
 * Loading component - Displays a spinning loader indicator.
 *
 * This component is used as a fallback while content is being loaded asynchronously.
 *
 * ## Example:
 * ```tsx
 * <Suspense fallback={<Loading />} />
 * ```
 *
 * @component
 * @returns {JSX.Element} A centered loading spinner
 *
 * TODO: Show different tips (☞ﾟヮﾟ)☞
 * @author Ralph Woiwode
 * @version 1.0.0
 */
const Loading = (): JSX.Element => {
  return (
    <div
      className="flex h-full w-full items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading...</span>
      <div className="border-primary border-t-accent h-10 w-10 animate-spin rounded-full border-4" />
    </div>
  );
};

export default Loading;
