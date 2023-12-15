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
      <SideBar setIsAuthenticated={setIsAuthenticated} />
      <Routes>
      <Route exact path="/" element={<HomePage />} />
        {/* <Route
          exact
          path="/"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/Login" />}
        /> */}
        <Route
          exact
          path="/Login"
          element={<Authentication setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route
          exact
          path="/Home"
          element={isAuthenticated ? <Home /> : <Navigate to="/Login" />}
        />
        <Route
          exact
          path="/Admin"
          element={isAuthenticated ? <Admin /> : <Navigate to="/Login" />}
        />
        <Route exact path="/notLogin" element={<NotLogin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
