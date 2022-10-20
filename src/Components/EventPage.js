import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import EventCards from './EventCards';

function EventPage() {
  return (
    <div>
      <Navbar />
      <EventCards />
      <Footer />
    </div>
  )
}

export default EventPage;
