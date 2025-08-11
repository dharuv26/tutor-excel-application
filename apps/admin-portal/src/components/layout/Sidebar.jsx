// src/apps/admin-portal/src/components/layout/Sidebar.jsx

import React from 'react';
import { Nav, Button } from 'react-bootstrap'; // Import Button from react-bootstrap
import { NavLink } from 'react-router-dom';
// 1. CORRECTED: Import icons from the 'react-bootstrap-icons' library
import { HouseDoorFill, PeopleFill } from 'react-bootstrap-icons'; 
import { useAuth } from '../../hooks/useAuth';

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <div className="d-flex flex-column vh-100 bg-dark text-white p-3">
      <h4 className="mb-4">TutorExel Admin</h4>
      <Nav className="flex-column nav-pills">
        <Nav.Item className="mb-2">
          <Nav.Link as={NavLink} to="/" end className="text-white d-flex align-items-center">
            <HouseDoorFill className="me-2" size={20} /> Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/users" className="text-white d-flex align-items-center">
            <PeopleFill className="me-2" size={20} /> User Management
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="mt-auto">
        <Button variant="outline-light" onClick={logout} className="w-100">
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;