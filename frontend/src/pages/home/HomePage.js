import React from 'react';
import './homePage.css';
import { Container } from 'react-bootstrap';

import Banner from '../../components/banner/Banner';
import Query from '../../components/query/Query';
import TodaysQue from '../../components/todaysQue/TodaysQue';


const HomePage = () => {
  return (
    <Container className="home">
      <Query />
      <Banner />
      <TodaysQue />
    </Container>
  );
};

export default HomePage;
