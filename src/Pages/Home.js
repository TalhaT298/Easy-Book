import React from 'react'
import Advertise from './Advertise/Advertise'

import Categories from './CategorySection/Categories'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import Section from './Section/Section'
const Home = () => {
  return (
    <>
       <Hero></Hero>
      <Categories></Categories>
      <Advertise></Advertise>
      <Section></Section>
      <Footer></Footer>
    </>
  )
}

export default Home