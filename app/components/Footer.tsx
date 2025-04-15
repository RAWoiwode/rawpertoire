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
        It’s set in <i>Google’s Noto Sans</i> and deployed on <i>Vercel</i>.
      </p>
    </div>
  );
};

export default Footer;
