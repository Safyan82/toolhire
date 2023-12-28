import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export const StarRating = ({rating, setRating}) => {

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              style={{opacity:0}}
              onClick={() => handleStarClick(index)}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
              size={24}
            />
          </label>
        );
      })}
      {/* <p>Selected Rating: {rating}</p> */}
    </div>
  );
};

