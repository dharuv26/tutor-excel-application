// packages/ui/src/LoginPage.jsx
import React from 'react';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';
import './LoginPage.css';

export const LoginPage = ({
  portalName,
  logoSrc,
  onSubmit,
  error,
  children,
}) => {
  return (
    <Container fluid className="login-page-container d-flex align-items-center justify-content-center p-3">
      <Card className="login-card">
        <Card.Body className="p-4 p-md-5">
          {logoSrc && <div className="text-center"><img src={logoSrc} alt="Logo" className="login-logo" /></div>}
          <h2 className="text-center mb-4">{portalName}</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={onSubmit}>
            {children} {/* This is where the form fields will go */}
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};