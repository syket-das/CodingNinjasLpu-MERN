import React from 'react';
import './homePage.css';
import { Container } from 'react-bootstrap';

import AboutPage from '../about/AboutPage';
import Banner from '../../components/banner/Banner';
import Query from '../../components/query/Query';

const HomePage = () => {
  return (
    <Container className="home">
      <Query />
      <Banner />
      <AboutPage />
    </Container>
  );
};

export default HomePage;
