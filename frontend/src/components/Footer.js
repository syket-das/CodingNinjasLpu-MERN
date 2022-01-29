import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container className="my-4">
      <Row>
        <Col>
          <h3>Contact Us</h3>
          <div className="d-flex align-items-center justify-centent-center">
            <i className="fas fa-envelope"></i>
            <span>codingninjaslpu@gmail.com</span>
          </div>
        </Col>
        <Col>
          <h3 className="text-end">Quick Links</h3>

          <div className="d-flex justify-content-end ">
            <i className="fab fa-facebook-square mx-2"></i>
            <i className="fab fa-instagram-square"></i>
            <i className="fab fa-linkedin mx-2"></i>
          </div>
        </Col>
      </Row>
      <p className="text-center">All Right Reserved &copy; Coding Ninjas Lpu</p>
    </Container>
  );
};

export default Footer;
