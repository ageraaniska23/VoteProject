// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Contact from'./page/Contact';
function App() {
  // Load authentication state from localStorage on component mount
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    return storedAuth ? JSON.parse(storedAuth) : false;
  });

  // Save authentication state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <Router>
      <Navbar setIsAuthenticated={setIsAuthenticated} isAuthenticated={isAuthenticated} />
      <Routes>
      <Route exact path="/" element={<HomePage />} />
        <Route
          exact
          path="/Login"
          element={<Authentication setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route
          exact
          path="/Vote"
          element={isAuthenticated ? <Vote /> : <Navigate to="/Login" />}
        />
        <Route exact path="/Home" element={<Home />} />
        <Route
          exact
          path="/Admin"
          element={isAuthenticated ? <Admin /> : <Navigate to="/Login" />}
        />
        <Route exact path="/notLogin" element={<NotLogin />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;