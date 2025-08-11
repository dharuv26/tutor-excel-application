import React from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import iconFacebook from '../../assets/icons/icon-facebook.svg'; // 1. Import new icons
import iconInstagram from '../../assets/icons/icon-instagram.svg';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  const subjects = ['Mathematics', 'Science', 'English', 'Hindi'];

  return (
    // 2. Use the custom padding class
    <footer className="bg-almost-black text-white-50 footer-section">
      <Container>
        <Row className="gy-5">
          {/* About Column */}
          <Col lg={4} md={12}>
            <img src={logo} height="40" alt="TutorExel Logo" className="mb-3" />
            <p>At TutorExel, we understand student struggles and parent concerns. Our personalized online tutoring builds confidence, improves performance, and helps students reach their academic goals—every step of the way.</p>
            <div className="d-flex gap-3 mt-4">
              {/* 3. Use the new icon images */}
              <a href="#"><img src={iconFacebook} alt="Facebook" style={{ width: '32px' }}/></a>
              <a href="#"><img src={iconInstagram} alt="Instagram" style={{ width: '32px' }}/></a>
            </div>
          </Col>

          {/* Subjects Column */}
          <Col lg={2} md={4}>
            <h5 className="text-white fw-bold mb-4">Subjects</h5>
            {/* 4. Use the custom bulleted list */}
            <ul className="footer-subjects-list d-grid gap-2">
              {subjects.map((subject) => (
                <li key={subject}><a href="#" className="text-white-50 text-decoration-none">{subject}</a></li>
              ))}
            </ul>
          </Col>

          {/* Subscribe Column */}
          <Col lg={3} md={4}>
            <h5 className="text-white fw-bold mb-4">Quick Links</h5>
            <a href="/about" className="text-white-50 text-decoration-none mb-2 d-block">About Us</a>
            <a href="/careers" className="text-white-50 text-decoration-none mb-2 d-block">Careers</a>
            <a href="/contact" className="text-white-50 text-decoration-none mb-2 d-block">Contact Us</a>
          </Col>

          {/* Contact Column */}
          <Col lg={3} md={4}>
            <h5 className="text-white fw-bold mb-4">Contact</h5>
            <a href="mailto:info@tutorexel.com" className="text-white-50 text-decoration-none d-flex align-items-center gap-2">
              <MdEmail /> info@tutorexel.com
            </a>
          </Col>
        </Row>
        
        <hr className="my-5" />
        
        <p className="text-center text-white-50 small">
            Copyright © {new Date().getFullYear()} TutorExel. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
