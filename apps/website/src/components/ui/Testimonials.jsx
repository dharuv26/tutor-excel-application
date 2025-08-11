// src/components/Testimonials.jsx

import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import avatarPriya from '../../assets/images/avatar-priya.png';
import avatarRohit from '../../assets/images/avatar-rohit.png';
import stars5 from '../../assets/icons/stars-5.svg'; // 1. Import the 5-star image
import { FaQuoteRight } from 'react-icons/fa';

const testimonialsData = [
  { name: 'Priya S.', text: 'Tutorexel has been a wonderful experience for my son. The teachers are professional, and he looks forward to every class!', avatar: avatarPriya },
  { name: 'Rohit K.', text: 'We love the flexibility and the personalised approach. Highly recommended', avatar: avatarRohit },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bolder" style={{ fontSize: '2.8rem' }}>What parents and students are saying</h2>
        </div>
        
        {/* Add mb-5 (margin-bottom) to create space for the reviewer images */}
        <Row className="justify-content-center g-5 mb-5">
          {testimonialsData.map((testimonial, index) => (
            <Col lg={5} md={6} key={index} className="d-flex flex-column align-items-center">
              {/* 2. Use the custom .testimonial-card class and ensure equal height */}
              <div className="testimonial-card h-100 position-relative">
                <FaQuoteRight size={40} className="position-absolute top-0 end-0 m-3 opacity-25" /> {/* 3. Position the quote icon */}
                <img src={stars5} alt="5-star rating" style={{ width: '120px' }} className="mb-3" /> {/* 4. Add the star image */}
                <p className="fs-5">{testimonial.text}</p>
              </div>
              <div className="d-flex align-items-center mt-4">
                {/* 5. Add dotted border to reviewer image */}
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    border: '3px dotted var(--primary-orange)',
                    borderRadius: '50%',
                    padding: '4px' 
                  }} 
                />
                <span className="fw-bold ms-3 fs-5">{testimonial.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
