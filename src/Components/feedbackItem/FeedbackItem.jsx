import React from "react";
import classes from "../../styles/FeedbackItem.module.css";
import Card from "../../UI/Card";
import { FaTimes } from "react-icons/fa";

const FeedbackItem = ({ item, text, rating, handleDelete }) => {
  const deleteHandler = (id) => handleDelete(id);

  return (
    <Card>
      <section className={classes.feedbackItem}>
        <div className={classes.rating}>{rating}</div>
        <button
          className={classes.button}
          onClick={() => deleteHandler(item.id)}
        >
          <FaTimes className={classes.time} />
        </button>
        <div>{text}</div>
      </section>
    </Card>
  );
};

export default FeedbackItem;
