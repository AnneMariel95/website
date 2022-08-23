import {useEffect} from 'react';
import {MDXProvider} from '@mdx-js/react';
import type {AppProps} from 'next/app';
import {useRouter} from 'next/router';
import useDarkMode from 'use-dark-mode';
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import '../styles/_globals.css';
import '../styles/animations.css';
import '../styles/custom.css';
import '../styles/tailwind.css';

function MyApp({Component, pageProps, router}: AppProps) {
  const {value: isDarkMode} = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <Header />
      {!router.pathname.includes('/blog') ? (
        <main className="mdx-layout flex flex-col items-center">
          <Component {...pageProps} />

          <style jsx global>{`
            .mdx-layout > pre {
              margin: var(--spacing-small) 0;
            }

            .mdx-layout blockquote > p {
              padding-left: var(--spacing-small);
            }

            .mdx-layout > ul {
              margin: 0;
            }

            .mdx-layout li {
              list-style: disc;
              margin-left: 2rem;
              font-size: 1rem;
              line-height: 1.3;
            }

            .mdx-layout > ol {
              margin: 0;
            }

            .mdx-layout > p {
              padding: 0 var(--spacing-small);
              margin-left: var(--spacing-small);
            }

            .mdx-layout li code,
            .mdx-layout p code,
            .mdx-layout h2 code,
            .mdx-layout h3 code,
            .mdx-layout h4 code,
            .mdx-layout h5 code,
            .mdx-layout h6 code {
              padding: 0 var(--spacing-very-small);
              border: 1px solid var(--color-primary-dark);
              border-radius: 2px;
              font-family: monospace;
            }

            .mdx-layout h2 em,
            .mdx-layout h3 em,
            .mdx-layout h4 em,
            .mdx-layout h5 em,
            .mdx-layout h6 em {
              font-size: 0.75rem;
            }
          `}</style>
        </main>
      ) : (
        <Component {...pageProps} />
      )}
      <Footer />
    </>
  );
}
export default MyApp;
