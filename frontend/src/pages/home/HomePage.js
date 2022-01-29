import React from 'react';
import './homePage.css';
import { Container } from 'react-bootstrap';

import AboutPage from '../about/AboutPage';
import Banner from '../../components/banner/Banner';

const HomePage = () => {
  return (
    <Container className="home">
      <Banner />
      <AboutPage />
    </Container>
  );
};

export default HomePage;
