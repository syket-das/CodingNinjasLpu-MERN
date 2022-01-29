import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="bg-dark text-light py-3">
      <Container className="my-4">
        <Row>
          <Col md={6} xs={12} className="my-2">
            <h3 className="text-light">Contact Us</h3>
            <div className="d-flex align-items-center justify-centent-center">
              <i className="fas fa-envelope"></i>
              <span className="ms-2">codingninjaslpu@gmail.com</span>
            </div>
          </Col>
          <Col md={6} xs={12} className="my-2">
            <h3 className="text-end text-light">Quick Links</h3>

            <div className="d-flex justify-content-end ">
              <i className="fab fa-facebook-square mx-2"></i>
              <i className="fab fa-instagram-square"></i>
              <i className="fab fa-linkedin mx-2"></i>
            </div>
          </Col>
        </Row>
        <p className="text-center mt-3">
          All Right Reserved &copy; Coding Ninjas Lpu
        </p>
        <p className="text-center text-light">
          Created By{' '}
          <a target="_blank" rel="noreferrer" href="https://syket-das.me">
            <span className="text-danger text-decoration-underline">
              Syket Das
            </span>
          </a>
        </p>
      </Container>
    </div>
  );
};

export default Footer;
