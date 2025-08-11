// apps/admin-portal/src/routes/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardLayout as SharedDashboardLayout } from '@repo/ui'; // Import shared layout

import ProtectedRoute from './ProtectedRoute';
import AdminSidebar from '../components/layout/Sidebar'; // The admin-specific sidebar
import LoginPage from '../screens/LoginPage/LoginPage';
import DashboardPage from '../screens/DashboardPage/DashboardPage';
import UserManagementPage from '../screens/UserManagementPage/UserManagementPage';
import NotFoundPage from '../screens/NotFoundPage/NotFoundPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        <Route 
          path="/*" // A wildcard to catch all other routes
          element={
            <ProtectedRoute requiredRole="admin">
              <SharedDashboardLayout sidebarContent={<AdminSidebar />}>
                <Routes>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/users" element={<UserManagementPage />} />
                  {/* Add other admin-specific routes here in the future */}
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </SharedDashboardLayout>
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;