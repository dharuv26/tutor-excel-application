// packages/ui/src/DashboardLayout.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const DashboardLayout = ({ sidebarContent, children }) => {
  return (
    <Container fluid>
      <Row>
        <Col md={3} lg={2} className="p-0" style={{ position: 'fixed', height: '100vh' }}>
          {sidebarContent}
        </Col>
        <Col md={{ span: 9, offset: 3 }} lg={{ span: 10, offset: 2 }} style={{ backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
          <div className="p-4">
            {children}
          </div>
        </Col>
      </Row>
    </Container>
  );
};