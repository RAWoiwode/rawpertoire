/**
 * The Footer component renders the site credits and build details.
 *
 * ## Example:
 * ```tsx
 * import Footer from "@/app/components/Footer";
 *
 * const App = () => (
 *   <div>
 *     <Footer />
 *   </div>
 * );
 * ```
 *
 * @component
 * @returns {JSX.Element} The footer section with site credits
 *
 * @author Ralph Woiwode
 * @version 0.1.0
 */
const Footer = () => {
  return (
    <div className="mt-24">
      <p className="text-xs">
        This site was inspired by{" "}
        <a
          className="text-accent transition-discrete hover:underline"
          href="https://brittanychiang.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang&apos;s
        </a>{" "}
        portfolio. I sketched the design in <i>Figma</i> and built it in{" "}
        <i>Visual Studio Code</i> using <i>Next.js</i>, <i>TypeScript</i>, and{" "}
        <i>Tailwind CSS</i>.
        <br />
        It&apos;s set in <i>Google&apos;s Noto Sans</i> and deployed on{" "}
        <i>Vercel</i>.
      </p>
    </div>
  );
};

export default Footer;
