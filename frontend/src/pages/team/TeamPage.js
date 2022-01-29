import React from 'react';

import { Alert, Col, Container, Row } from 'react-bootstrap';
import SingleCard from '../../components/card/SingleCard';

const TeamPage = () => {
  return (
    <>
      <Alert variant="light " className="text-center fs-1">
        Our Team
      </Alert>
      <Container className="h80">
        <Container className="my-3">
          <Alert variant="info">
            <h1 className="text-center">Executive</h1>
          </Alert>

          <Row>
            <Col xs={6} md={4} lg={4} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={4} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={4} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
          </Row>
        </Container>
        <Container className=" my-3">
          <Alert variant="primary">
            <h1 className="text-center">Team Heads {'&'} Assistant Heads </h1>
          </Alert>

          <Row>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
          </Row>
        </Container>
        <Container className=" my-3">
          <Alert variant="primary">
            <h1 className="text-center">Members</h1>
          </Alert>

          <Row>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
            <Col xs={6} md={4} lg={3} className="d-flex justify-content-center">
              <SingleCard />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default TeamPage;
