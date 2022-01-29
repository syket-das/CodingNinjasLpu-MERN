import React from 'react';
import './homePage.css';
import { Container } from 'react-bootstrap';
import Banner from '../../components/Banner';
import AboutPage from '../about/AboutPage';

const HomePage = () => {
  return (
    <Container className="home">
      <Banner />
      <AboutPage />
    </Container>
  );
};

export default HomePage;
