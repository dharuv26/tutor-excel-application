// src/components/Hero.jsx

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroBoy from '../../assets/images/hero-boy.png'; 
import playIcon from '../../assets/icons/icon-play.svg';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero-section-bg py-5 responsive-hero">
      <Container>
        <Row className="align-items-center gy-4 gy-lg-5 hero-row">
          <Col lg={6} className="text-center text-lg-start hero-content">
            <h1 className="hero-title fw-bolder text-dark-navy">
              Empowering Your Child to Succeed Anywhere
            </h1>
            <p className="hero-subtitle text-secondary my-3 my-lg-4">
              Select a plan, set your schedule, and watch your child's skills and confidence grow.
            </p>
            <div className="hero-actions d-flex flex-column flex-sm-row align-items-center gap-3 gap-lg-4 justify-content-center justify-content-lg-start">
              <Button 
                variant="primary-orange" 
                size="sm" 
                className="hero-cta-button d-inline-flex align-items-center"
              >
                Book Your Free Trial Class <FaArrowRight className="ms-2" />
              </Button>
              <a 
                href="#" 
                className="hero-watch-button btn d-inline-flex align-items-center gap-2 fw-semibold text-dark-navy text-decoration-none"
              >
                <img 
                  src={playIcon} 
                  alt="Play Video" 
                  className="play-icon"
                />
                Watch Now
              </a>
            </div>
          </Col>
          <Col lg={6} className="d-flex justify-content-center position-relative hero-image-col">
            <div className="hero-image-container">
              <img 
                src={heroBoy} 
                alt="Student learning with headset" 
                className="hero-image img-fluid position-relative" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;