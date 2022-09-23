import React from "react";
import FeedbackItem from "../feedbackItem/FeedbackItem";

const FeedbackList = ({ feedback, onDelete }) => {
  if (!feedback || feedback.length === 0) {
    return (
      <p style={{ textAlign: "center", padding: "3rem" }}>
        There is No Feedback Yet!
      </p>
    );
  }

  return (
    <ul>
      {feedback.map((item) => (
        <FeedbackItem
          key={item.id}
          item={item}
          rating={item.rating}
          text={item.text}
          handleDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default FeedbackList;
