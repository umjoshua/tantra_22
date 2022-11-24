import React from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/register/Register';
import ThanksPage from './pages/register/thanks';
import MeEvents from './components/EventListCards/MeEvents/MeEvents';
import CseEvents from './components/EventListCards/CseEvents/CseEvents';
import CeEvents from './components/EventListCards/CeEvents/CeEvents';
import EceEvents from './components/EventListCards/EceEvents/EceEvents';
import AeiEvents from './components/EventListCards/AeiEvents/AeiEvents';
import EeeEvents from './components/EventListCards/EeeEvents/EeeEvents';
import AshEvents from './components/EventListCards/AshEvents/AshEvents';
import AdsEvents from './components/EventListCards/AdsEvents/AdsEvents';
import CommEvents from './components/EventListCards/ComEvents/CommEvents';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/me-events' element={<MeEvents />} />
        <Route exact path='/cse-events' element={<CseEvents />} />
        <Route exact path='/ce-events' element={<CeEvents />} />
        <Route exact path='/ece-events' element={<EceEvents />} />
        <Route exact path='/aei-events' element={<AeiEvents />} />
        <Route exact path='/eee-events' element={<EeeEvents />} />
        <Route exact path='/ash-events' element={<AshEvents />} />
        <Route exact path='/ads-events' element={<AdsEvents />} />
        <Route exact path='/com-events' element={<CommEvents />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/thanks' element={<ThanksPage />} />
        <Route exact path='/page' element={<PageNotFound/>} />
      </Routes>
    </Router>
  )
}

export default App