import React from "react";
import classes from "../../styles/FeedbackStats.module.css";

const FeedbackStats = ({ feedback }) => {
  let averageRating =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  return (
    <section className={classes.feedbackRating}>
      <h4>{feedback.length} Reviews</h4>
      <h4>
        Average Rating: {isNaN(averageRating) ? 0 : averageRating.toFixed(1)}
      </h4>
    </section>
  );
};

export default FeedbackStats;
