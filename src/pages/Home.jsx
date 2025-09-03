import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Move from '../components/Move'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'
import Plan from '../components/Plan'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Move/>
      <AiTools/>
      <Testimonial/>
      <Plan/>
      <Footer/>
    </>
  )
}

export default Home
