// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Authentication from './page/Authentication';
import HomePage from './page/HomePage';
import SideBar from './page/Navbar/NavBar';
import Footer from './page/footer/Footer';
import Home from './page/Home';
import Admin from './page/Admin/Admin';
import SignUp from './page/SignUp';
import NotLogin from './page/notLogin';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Get authentication status from local storage on component mount
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    // Save authentication status to local storage whenever it changes
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <SideBar />
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
          path="/Home"
          element={isAuthenticated ? <Home /> : <Navigate to="/notLogin" />}
        />
        <Route
          exact
          path="/Admin"
          element={isAuthenticated ? <Admin /> : <Navigate to="/notLogin" />}
        />
        <Route exact path="/notLogin" element={<NotLogin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
