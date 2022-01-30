import React from 'react';
import './singleCard.scss';
const SingleCard = () => {
  return (
    <>
      <div className="m-3">
        <div className="image-card">
          <img src="assets/img/cn.png" alt="img" />
          <h2>Person name</h2>
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
