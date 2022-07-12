import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import "primeicons/primeicons.css"
import "primereact/resources/primereact.min.css"; //core css
import "primereact/resources/themes/md-light-indigo/theme.css"; //theme
import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    import('bootstrap');
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
