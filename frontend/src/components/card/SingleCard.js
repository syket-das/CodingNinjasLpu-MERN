import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import './singleCard.scss';
const SingleCard = () => {
  return (
    <>
      <div className="m-3">
        <div className="image-card">
          <img src="https://images.unsplash.com/photo-1582439170934-d089aa10abda?ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80" />
          <h2>Beni Pixie</h2>
          <ul>
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
            <li>
              <i className="fab fa-twitter"></i>
            </li>
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
