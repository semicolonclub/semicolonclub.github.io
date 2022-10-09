import React from 'react';
import './App.css';
import Testimonials from './Components/Testimonials';
import Testimonialsection from './Components/Testimonialsection';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Upcoming from './Components/Upcoming';

function App() {
  return (
    <div>
      <Navbar />
      <Upcoming/>
      <Testimonialsection />
      <Footer />
    </div>
  );
}

export default App;
