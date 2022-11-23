import React from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MechanicalEvents from './components/EventListCards/MechanicalEvents/MechanicalEvents';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element={<Home/>}/>
        <Route exact path = '/me-events' element={<MechanicalEvents/>}/>
        <Route exact path = '/cse-events' element={<MechanicalEvents/>}/>
      </Routes>
    </Router>
  )
}

export default App