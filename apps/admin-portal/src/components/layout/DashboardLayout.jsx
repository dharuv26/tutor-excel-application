// src/components/layout/DashboardLayout.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} lg={2} className="p-0">
          <Sidebar />
        </Col>
        <Col md={9} lg={10} style={{ backgroundColor: '#f4f7f6' }}>
          <div className="p-4">
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardLayout;