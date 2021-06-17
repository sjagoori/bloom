import '../styles/globals.css'
import Navbar from '../components/navbar/Navbar'
import LoadingScreen from '../components/loadingScreen/loadingScreen'
import React, { useState } from 'react';
import Router from 'next/router';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const noNav = ['/', '/login']

  Router.onRouteChangeStart = () => {
    setLoading(true)
  }

  Router.onRouteChangeComplete = (e) => {
    setLoading(false)
  }

  return (
    loading
      ? <>
        <LoadingScreen />
        <Navbar />
      </>
      : <>
        <Component {...pageProps} ></Component>
        {noNav.includes(router.pathname) ? null : <Navbar />}
      </>
  )
}

export default MyApp;

