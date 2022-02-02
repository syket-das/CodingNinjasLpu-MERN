import React from 'react';
import { Container } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container id="about" className="h80 my-3">
      <h1 className="text-center text-bold">About Us</h1>

      <p className="font-monospace fs-3 text-start" style={{}}>
        Our community is an open platform for all students to learn and grow
        together. At Coding Ninjas LPU we believe in the power of knowledge to
        enhance humanity and make greater impacts. For tech-enthusiast, budding
        entrepreneurs, designers and curious learners, Coding Ninjas LPU is here
        for you. We organise peer to peer learning sessions, engage with people
        and make sure you learn from the best.
      </p>
    </Container>
  );
};

export default AboutPage;
