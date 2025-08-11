// src/routes/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // Show a loading spinner or a blank page while checking auth
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to. This allows us to redirect them back after login.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  
  // Check if a specific role is required and if the user has it
  if (requiredRole && user?.role !== requiredRole) {
    // User is logged in but doesn't have permission
    // Redirect to a "Not Authorized" page or back to the dashboard
    return <Navigate to="/" replace />; // Or a custom /unauthorized page
  }

  return children;
};

export default ProtectedRoute;