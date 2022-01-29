import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Typed from 'react-typed';
import './banner.scss';
const Banner = () => {
  return (
    <>
      <Row className="">
        <Col sm={12} md={6} className="my-3">
          <Container>
            <Image
              className="banner-img"
              src="assets/img/cn.png"
              width="350px"
              fluid
            />
          </Container>
        </Col>
        <Col sm={12} md={6} className="my-3 banner-right">
          <Container className="p-3 banner-right-part">
            <h1 className="my-3">
              <Typed
                loop
                strings={['Welcome To', 'Coding Ninjas Lpu']}
                typeSpeed={50}
                backSpeed={50}
                smartBackspace
              />
            </h1>
            <p>
              The World has Enough Coders. Be More than a Coder. Be a Coding
              Ninja The World has Enough Coders. Be More than a Coder. Be a
              Coding Ninja The World has Enough Coders. Be More than a Coder. Be
              a Coding Ninja The World has Enough Coders. Be More than a Coder.
              Be a Coding Ninja
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
