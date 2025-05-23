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
 * @version 1.0.0
 */
const Footer = () => {
  return (
    <footer
      className="mt-20"
      role="contentinfo"
      aria-label="Site credits and technology stack"
    >
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
        portfolio. I sketched the design in{" "}
        <span className="italic">Figma</span> and built it in{" "}
        <span className="italic">Visual Studio Code</span> using{" "}
        <span className="italic">Next.js</span>,{" "}
        <span className="italic">TypeScript</span>, and{" "}
        <span className="italic">Tailwind CSS</span>.
        <br />
        It&apos;s set in <span className="italic">
          Google&apos;s Noto Sans
        </span>{" "}
        and deployed on <span className="italic">Vercel</span>.
      </p>
    </footer>
  );
};

export default Footer;
