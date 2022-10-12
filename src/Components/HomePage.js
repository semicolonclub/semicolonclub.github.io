import React from 'react'
import About from './About'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Testimonialsection from './Testimonialsection'
import Upcoming from './Upcoming'

function HomePage() {
  return (
    <div>
      <Navbar />
      <About />
      <Upcoming/>
      <Testimonialsection />
      <Footer />
    </div>
  )
}

export default HomePage
