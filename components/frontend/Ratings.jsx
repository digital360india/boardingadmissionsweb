
import React from 'react';
import Rating from "./Ratingdata"

export default function Star({ rating }) {
  return (
    <div>
      <Rating given={rating} />
    </div>
  );
}