/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ rating, ratingCount }) => {
  const [starsArr, setStarsArr] = useState([]);
  useEffect(() => {
    switch (rating) {
      case 0: setStarsArr([0, 0, 0, 0, 0]); break;
      case 0.5: setStarsArr([0.5, 0, 0, 0, 0]); break;
      case 1: setStarsArr([1, 0, 0, 0, 0]); break;
      case 1.5: setStarsArr([1, 0.5, 0, 0, 0]); break;
      case 2: setStarsArr([1, 1, 0, 0, 0]); break;
      case 2.5: setStarsArr([1, 1, 0.5, 0, 0]); break;
      case 3: setStarsArr([1, 1, 1, 0, 0]); break;
      case 3.5: setStarsArr([1, 1, 1, 0.5, 0]); break;
      case 4: setStarsArr([1, 1, 1, 1, 0]); break;
      case 4.5: setStarsArr([1, 1, 1, 1, 0.5]); break;
      case 5: setStarsArr([1, 1, 1, 1, 1]); break;
      default: break;
    }
  }, []);

  return (
    <div>
      {starsArr.map((star, i) => {
        if (star === 0) {
          return <i className="far fa-star" key={i} id="star" />;
        }
        if (star === 0.5) {
          return <i className="fas fa-star-half-alt" key={i} id="star" />;
        }
        if (star === 1) {
          return <i className="fas fa-star" key={i} id="star" />;
        }
        return undefined;
      })}
      <label className="item-rating-count">{ratingCount}</label>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.string.isRequired,
};

export default StarRating;
