import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Move from '../components/Move'
import AiTools from '../components/AiTools'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Move/>
      <AiTools/>
      <Testimonial/>
    </>
  )
}

export default Home
