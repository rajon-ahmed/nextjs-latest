import '../styles/globals.css';
// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
