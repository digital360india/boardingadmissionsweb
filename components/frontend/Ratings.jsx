
import React from 'react';
import Rating from "./Ratingdata"

export default function Star({ star }) {
  return (
    <div>
      <Rating given={star.ratingByPerson} />
    </div>
  );
}