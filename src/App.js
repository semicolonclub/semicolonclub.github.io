import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import EventPage from "./Components/EventPage";
import HomePage from "./Components/HomePage";
import ResourcesPage from "./Components/ResourcesPage";
import GalleryPage from "./Components/GalleryPage";
import TeamPage from "./Components/TeamPage";
import AboutUsPage from "./Components/AboutUsPage";
import Upcoming from "./Components/Upcoming";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  // let component = <HomePage/>;
  // switch (window.location.pathname) {
  //   case "/HomePage":
  //     component = <HomePage />;
  //     break;
  //   case "/EventPage":
  //     component = <EventPage />;
  //     break;
  //   case "/TeamPage":
  //     component = <TeamPage />;
  //     break;
  //   case "/ResourcesPage":
  //     component = <ResourcesPage />;
  //     break;
  //   case "/AboutUsPage":
  //     component = <AboutUsPage />;
  //     break;
  //   case "/Upcoming":
  //     component = <Upcoming />;
  //     break;
    
  // }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/gallery"  element={<GalleryPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
