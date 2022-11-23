import React from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MechanicalEvents from './components/EventListCards/MechanicalEvents/MechanicalEvents';
import Register from './pages/register/Register';
import ThanksPage from './pages/register/thanks';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/me-events' element={<MechanicalEvents />} />
        <Route exact path='/cse-events' element={<MechanicalEvents />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/thanks' element={<ThanksPage />} />
      </Routes>
    </Router>
  )
}

export default App