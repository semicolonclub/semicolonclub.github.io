import React from "react";
import "./App.css";
import EventPage from "./Components/EventPage";
import HomePage from "./Components/HomePage";
import ResourcesPage from "./Components/ResourcesPage";
import TeamPage from "./Components/TeamPage";
import AboutUsPage from "./Components/AboutUsPage";
import Upcoming from "./Components/Upcoming";

function App() {
  let component = <HomePage/>;
  switch (window.location.pathname) {
    case "/HomePage":
      component = <HomePage />;
      break;
    case "/EventPage":
      component = <EventPage />;
      break;
    case "/TeamPage":
      component = <TeamPage />;
      break;
    case "/ResourcesPage":
      component = <ResourcesPage />;
      break;
    case "/AboutUsPage":
      component = <AboutUsPage />;
      break;
    case "/Upcoming":
      component = <Upcoming />;
      break;
    
  }
  return (
    <div>
    
      {component}
    </div>
  );
}

export default App;
