import Link from 'next/link';

const AboutPage = () => (
  <main>
    <h1>About</h1>
    <h2>This is the about page</h2>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </main>
);

export default AboutPage;
