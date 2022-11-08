import React from "react";
import "./App.css";
import EventPage from "./Components/EventPage";
import HomePage from "./Components/HomePage";
import ResourcesPage from "./Components/ResourcesPage";
import TeamPage from "./Components/TeamPage";
import AboutUsPage from "./Components/AboutUsPage";

function App() {
  let component;
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
  }
  return (
    <div>
      {/* <HomePage />
       <EventPage /> 
       <TeamPage/> */}
      {component}
    </div>
  );
}

export default App;
