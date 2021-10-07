import React from 'react';
// Modules
import '../styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
// MUI Core
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
// Utils
import {lightTheme, darkTheme} from '../utils/theme';
import Navigationbar from '../components/Navigationbar';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    const [themeKey, setThemeKey] = React.useState(lightTheme);
    React.useEffect(() => {
    // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentElement) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
        if (typeof window !== 'undefined') {
            window.localStorage?.getItem('theme') === '1' ? setThemeKey(darkTheme) : setThemeKey(lightTheme)
        }
  }, []);

  const changeTheme = () => {
      if (themeKey === lightTheme) {
          setThemeKey(darkTheme);
          localStorage.setItem("theme", '1');
      } else {
          setThemeKey(lightTheme);
          localStorage.setItem("theme", '-1');
      }
  }

  return (
      <>
          <Head>
              <title>Portfolio</title>
              <meta name="viewport" content="width=device-width,initial-scale=1" />
              <link rel="icon" href="/images/icons/icon-72x72.png" />
              <link rel="manifest" href="/manifest.json" />
              <meta name="apple-mobile-web-app-capable" content="yes" />
              <meta name="apple-mobile-web-app-status-bar-style" content="black" />
              <meta name="apple-mobile-web-app-title" content="Saad's Portfolio" />
              <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png" />
              <meta name="description" content="List of dumb things I have done the past few decades" />
              <meta name="theme-color" content="#2F3BA2" />
              <meta name='twitter:card' content='summary' />
              <meta name='twitter:url' content='https://muttakee31.github.io' />
              <meta name='twitter:title' content="Saad's Portfolio" />
              <meta name='twitter:description' content='Get to know your next free day in few clicks!' />
              <meta name='twitter:image' content='https://muttakee31.github.io/images/icons/icon-512x512.png' />
              <meta name='twitter:creator' content='Saad Al Muttakee' />
              <meta property='og:type' content='website' />
              <meta property='og:title' content="Saad's Portfolio" />
              <meta property='og:description' content='Get to know your next free day in few clicks' />
              <meta property='og:site_name' content="Saad's Portfolio" />
              <meta property='og:url' content='https://muttakee31.github.io' />
              <meta property='og:image' content='https://muttakee31.github.io/images/icons/icon-384x384.png' />
          </Head>
        <ThemeProvider theme={themeKey}>
          <CssBaseline />
          <Navigationbar themeKey={themeKey} changeTheme={changeTheme} />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
  );
};

export default MyApp;