import React from "react";
import classes from "../../styles/RatingSelect.module.css";

const RatingSelect = ({ ratingDone, rating }) => {
  const handleChange = (e) => {
    ratingDone(+e.target.value);
  };

  return (
    <ul className={classes.ratingList}>
      {Array.from({ length: 5 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={rating === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
};

export default RatingSelect;
