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
          <title>My App</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={themeKey}>
          <CssBaseline />
          <Navigationbar changeTheme={changeTheme} />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
  );
};

export default MyApp;