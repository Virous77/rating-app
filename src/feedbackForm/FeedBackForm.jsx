import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "../styles/FeedbackForm.module.css";
import RatingSelect from "../Components/giveRating/RatingSelect";

const FeedBackForm = ({ onAddForm }) => {
  const [review, setReview] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [error, setError] = useState("");
  const [rating, setRating] = useState();

  const inputReviewHandler = (e) => {
    if (review === "") {
      setBtnDisabled(true);
      setError(null);
    } else if (review !== "" && review.trim().length <= 10) {
      setError("Text Must be atleast 10 characters.");
      setBtnDisabled(true);
    } else {
      setError(null);
      setBtnDisabled(false);
    }

    setReview(e.target.value);
  };

  const reviewSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      text: review,
      rating: rating,
    };

    onAddForm(newFeedback);

    setReview("");
  };

  return (
    <Card>
      <form onSubmit={reviewSubmit} className={classes.form}>
        <div>
          <h2>Write your review here!!</h2>
          <div className={classes.wrap}>
            <p>Rating:-</p>
            <RatingSelect
              ratingDone={(rating) => setRating(rating)}
              rating={rating}
            />
          </div>

          <div className={classes.formInput}>
            <input
              type="text"
              placeholder="Write a Review"
              value={review}
              onChange={inputReviewHandler}
            />
            <Button type="submit" version="secondry" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
        </div>
        {error && <div className={classes.error}>{error}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;
