/**
 * The CallToAction component invites visitors to collaborate or request freelance work.
 *
 * ## Example:
 * ```tsx
 * import CallToAction from "@/app/components/CallToAction";
 *
 * export default function Page() {
 *   return (
 *     <>
 *       <Projects />
 *       <CallToAction />
 *       <Footer />
 *     </>
 *   );
 * }
 * ```
 *
 * @component
 * @returns {JSX.Element} A visually distinct call-to-action section
 *
 * @author Ralph Woiwode
 * @version 1.0.0
 */
const CallToAction = (): JSX.Element => {
  return (
    <section id="contact" className="pt-4 text-center">
      <h2 className="text-primary mb-4 text-2xl font-semibold tracking-widest">
        Let&apos;s Build Something Together
      </h2>
      <p className="mx-auto max-w-xl">
        I enjoy working with other developers and helping people bring their
        ideas to life — whether it&apos;s building something from the ground up
        or improving what&apos;s already there. I&apos;m also open to freelance
        work if you need a hand creating a site that looks great and feels even
        better to use.
      </p>
      <p className="mx-auto mt-4 max-w-xl">
        If you&apos;ve got an idea or need some extra help, feel free to reach
        out — I&apos;d be happy to connect.
      </p>
      <div className="mt-6 flex justify-center">
        <a
          href="mailto:rawoiwode+portfolio@gmail.com"
          className="underline-link underline-link-left underline-link-hover p-2 text-lg tracking-wide uppercase transition-all"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
