import '../styles/globals.css';
import theme from '../styles/globals'
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globals';
import HeaderComponent  from '../src/components/pages/header/index';

function App({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={GlobalStyle}>
      <HeaderComponent/>

        <Head>
        </Head>
      <Component {...pageProps} />
    </ThemeProvider >
    </>
    )
}

export default App;
