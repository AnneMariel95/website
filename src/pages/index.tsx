import Link from 'next/link';

const IndexPage = () => (
  <div className="h-screen">
    <h1 className="text-3xl font-bold underline">
      Hello Next.js with TypeScript and Tailwind 👋
    </h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;
