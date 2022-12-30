import React from 'react'
import About from './About'
import DeveloperTeam from './DeveloperTeam'
import Footer from './Footer'
import Hero from './Hero'
import Navbar from './Navbar'
import Testimonialsection from './Testimonialsection'
import Upcoming from './Upcoming'

function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Upcoming/>
      <Testimonialsection/>
      <DeveloperTeam/>
      {/* <Footer /> */}
    </div>
  )
}

export default HomePage
