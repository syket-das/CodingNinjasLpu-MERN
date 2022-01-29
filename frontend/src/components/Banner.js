import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const Banner = () => {
  return (
    <>
      <Row className="d-flex align-items-center">
        <Col sm={12} md={6} className="my-3">
          <Image src="assets/img/cn.png" width="350px" fluid />
        </Col>
        <Col sm={12} md={6} className="my-3">
          <Container>
            <h1 className="my-3">Coding Ninjas</h1>
            <p>
              The World has Enough Coders. Be More than a Coder. Be a Coding
              Ninja
            </p>
            <Button variant="btn btn-outline-primary">
              Want to be a Ninja Coder
            </Button>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default Banner;
