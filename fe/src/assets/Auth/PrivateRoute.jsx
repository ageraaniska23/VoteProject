// PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAuthenticated, redirectTo, children }) => {
  return isAuthenticated ? (
    <Route element={children} />
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;
