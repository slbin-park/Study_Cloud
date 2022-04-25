import '../styles/globals.css';
import theme from '../styles/globals'
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globals';

function App({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={GlobalStyle}>
        <Head>
        </Head>
      <Component {...pageProps} />
    </ThemeProvider >
    </>
    )
}

export default App;
