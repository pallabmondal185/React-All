import React from 'react'
import AboutUs from '../../../pages/AboutUs'
import Service from '../../../pages/Service'
import Testimonials from '../../../pages/testimonials/Testimonials'
import Banner from '../../../component/common/Banner'
import Contact from '../../../pages/Contact'

function Home() {
  return (
    <>
      <Banner />
      <Service />
      <AboutUs />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home
