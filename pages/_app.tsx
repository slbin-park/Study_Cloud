import '../styles/globals.css';
import theme from '../styles/globals'
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globals';
import HeaderComponent  from '../src/components/pages/header/index';
import Layout from '../src/components/layout/layout'
function App({ Component, pageProps }) {
  return (
    <>
    <ThemeProvider theme={GlobalStyle}>
        <Head>
        </Head>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
    </ThemeProvider >
    </>
    )
}

export default App;
