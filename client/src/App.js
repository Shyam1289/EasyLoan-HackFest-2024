import React from 'react';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import About from './components/About/About';
import NotFound from './components/Layout/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import Login from './components/Auth/Login';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import ChangePassword from './components/Profile/ChangePassword';
import Request from './components/Request/Request';
import Loans from './components/Loans/Loans';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/changepassword' element={<ChangePassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/loans' element={<Loans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/request' element={<Request />} />

        <Route path="/updateprofile" element={<UpdateProfile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
