// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthentication } from '../src/components/authentication'; // Import useAuthentication from authentication.js
import Authentication from './page/Signin';
import HomePage from './page/HomePage';
import Navbar from './page/Navbar/NavBar';
import Footer from './page/footer/Footer';
import Home from './page/Home';
import Admin from './page/Admin/Admin';
import SignUp from './page/SignUp';
import NotLogin from './page/notLogin';
import About from './page/About';
import Vote from './page/vote';
import Contact from './page/Contact';
import Pilpres from './page/resultsData/Pilpres';
import DprRi from './page/resultsData/DprRi'
import Pilkada from './page/resultsData/Pilkada';
import DPD from './page/resultsData/DPD';

function App() {
  const { isAuthenticated, setIsAuthenticated } = useAuthentication(); // Use useAuthentication hook

  return (
    <Router>
      <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Login" element={<Authentication setIsAuthenticated={setIsAuthenticated} />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Vote" element={isAuthenticated ? <Vote /> : <Navigate to="/Login" />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Admin" element={isAuthenticated ? <Admin /> : <Navigate to="/Login" />} />
        <Route exact path="/notLogin" element={<NotLogin />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Pilpres" element={<Pilpres />} />
        <Route exact path="/Pilkada" element={<Pilkada />} />
        <Route exact path="/DprRi" element={<DprRi />} />
        <Route exact path="/DPD" element={<DPD />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
