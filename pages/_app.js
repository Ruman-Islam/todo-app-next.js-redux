import Head from 'next/head'
import Script from 'next/script'
import { Provider } from 'react-redux'
import Navbar from '../components/Navbar'
import store from '../redux/store'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>
      <Provider store={store}>
        <div className='myApp'>
          <main className='main-container-wrapper'>
            <div className='main-container'>
              <Navbar />
              <Component {...pageProps} />
            </div>
          </main>
        </div>
      </Provider>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" />
    </>
  )
}

export default MyApp
