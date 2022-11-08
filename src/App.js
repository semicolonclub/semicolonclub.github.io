import React from 'react';
import './App.css';
import EventPage from './Components/EventPage';
import HomePage from './Components/HomePage';
import TeamPage from './Components/TeamPage';
import AboutUsPage from './Components/AboutUsPage';

function App() {
  return (
    <div>
        <HomePage /> 
       <AboutUsPage/>
       {/* <EventPage /> 
       <TeamPage/> */}
    </div>
  );
}

export default App;
