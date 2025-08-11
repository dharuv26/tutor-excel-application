// apps/admin-portal/src/screens/LoginPage/LoginPage.jsx
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { loginUser } from '../../services/authService';

import { LoginPage as SharedLoginPage } from '@repo/ui'; // Import the shared component
import logo from '../../assets/logo.svg'; // Import the admin app's logo

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userData = await loginUser({ email, password });
      login(userData);
      navigate(from, { replace: true });
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <SharedLoginPage
      portalName="Admin Portal"
      logoSrc={logo}
      onSubmit={handleSubmit}
      error={error}
    >
      {/* These are the form fields, passed as children */}
      <Form.Group className="mb-3" controlId="formAdminEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formAdminPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </Form.Group>
      
      <Button variant="primary" type="submit" className="w-100 mt-3">
        Log In
      </Button>
    </SharedLoginPage>
  );
};

export default LoginPage;