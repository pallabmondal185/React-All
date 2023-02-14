import React from 'react'
import Banner from './common/Banner'
import Footer from './common/Footer'
import Nav from './common/Nav'
import About from './core/home/About'
import Main from './core/home/Main'

export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <About />
      <Main />
      <Footer />
    </>
  )
}
