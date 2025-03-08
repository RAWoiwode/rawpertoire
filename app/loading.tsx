/**
 * Loading component - Displays a spinning loader indicator.
 *
 * This component is used as a fallback while content is being loaded asynchronously.
 *
 * @component
 * @returns {JSX.Element} A centered loading spinner
 *
 * TODO: Show different tips (☞ﾟヮﾟ)☞
 * @author Ralph Woiwode
 * @version 0.1.0
 */
const Loading = (): JSX.Element => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="border-primary-500 border-t-accent-500 h-10 w-10 animate-spin rounded-full border-4" />
    </div>
  );
};

export default Loading;
