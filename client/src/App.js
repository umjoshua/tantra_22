import React from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import ThanksPage from './pages/register/thanks';
import PageNotFound from './components/pageNotFound/PageNotFound';
import RegisterB from './pages/register/RegisterB';
import {
  AdsEvents,
  AeiEvents,
  AshEvents,
  CeEvents,
  CommEvents,
  CseEvents,
  EceEvents,
  EeeEvents,
  MeEvents
} from './components/EventListCards';

function App() {
  return (
    <HashRouter >
      {/* <Router> */}
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
          <Route exact path='/register' element={<RegisterB />} />
          <Route exact path='/thanks' element={<ThanksPage />} />
          <Route exact path='/*' element={<PageNotFound />} />
        </Routes>
      {/* </Router> */}
    </HashRouter >
  )
}

export default App