import {useEffect} from 'react';
import type {AppProps} from 'next/app';
import useDarkMode from 'use-dark-mode';
import Footer from '../components/Footer';
import Header from '../components/header/Header';
import '../styles/_globals.css';
import '../styles/animations.css';
import '../styles/custom.css';
import '../styles/tailwind.css';

function MyApp({Component, pageProps}: AppProps) {
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
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
