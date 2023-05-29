import React from 'react'
import About from './About'
import DeveloperTeam from './DeveloperTeam'
import Footer from './Footer'
import GalleryPage from './GalleryPage'
import Hero from './Hero'
import Navbar from './Navbar'
import Testimonialsection from './Testimonialsection'
import Upcoming from './Upcoming'
import Design from './Design'
function HomePage() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Upcoming />
      <Testimonialsection />
      {/* <GalleryPage /> */}
      <DeveloperTeam />
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage
