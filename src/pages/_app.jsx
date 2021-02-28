import Router from 'next/router';
import NProgress from 'nprogress'; // nprogress module
import 'nprogress/nprogress.css'; // styles of nprogress
import '../styles/globals.css';

import GlobalProvider from 'contexts/GlobalProvider';

import Navbar from 'components/Navbar';

// Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Navbar />
      <Component {...pageProps} />
    </GlobalProvider>
  );
}

export default MyApp;
