import React from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workshop from './components/workshops/Workshop';
import AdminHome from './pages/admin/AdminHome';
import AdminLogin from './pages/admin/AdminLogin';

function App() {
  const user = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/workshop' element={<Workshop />} />
        {user && <Route path="/admin" exact element={<AdminHome />} />}
        <Route exact path='/admin' element={<AdminLogin />} />
      </Routes>
    </Router>
  )
}

export default App