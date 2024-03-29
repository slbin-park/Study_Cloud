import '../styles/globals.css';
import theme from '../styles/globals';
import Head from 'next/head';
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/globals';
import HeaderComponent from '../src/components/pages/header/index';
import Layout from '../src/components/layout/layout';
import { Modal } from '../src/components/UI/atoms';
function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={GlobalStyle}>
        <Head />
        <Layout>
          <Modal />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
