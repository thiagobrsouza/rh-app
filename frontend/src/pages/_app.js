import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap');
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
