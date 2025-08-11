// src/screens/DashboardPage/DashboardPage.jsx
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useAuth } from '../../hooks/useAuth';

const DashboardPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p className="lead">Welcome back, {user?.name || 'Admin'}!</p>
      <hr />
      <Row>
        <Col md={4}><Card><Card.Body>Placeholder for "New Inquiries"</Card.Body></Card></Col>
        <Col md={4}><Card><Card.Body>Placeholder for "Total Tutors"</Card.Body></Card></Col>
        <Col md={4}><Card><Card.Body>Placeholder for "Active Students"</Card.Body></Card></Col>
      </Row>
    </div>
  );
};

export default DashboardPage;