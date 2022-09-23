import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Components/header/Header";
import FeedbackList from "./Components/feedbacklist/FeedbackList";
import FeedbackStats from "./Components/stats/FeedbackStats";
import FeedBackForm from "./feedbackForm/FeedBackForm";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem("feedbacks")) || []
  );

  //Update List
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedback));
  }, [feedback]);

  //Delete
  const feedbackDeleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      localStorage.removeItem(
        setFeedback(feedback.filter((item) => item.id !== id))
      );
    }
  };

  //Add
  const addFormHandler = async (newFeedback) => {
    newFeedback.id = uuidv4();

    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <main>
      <Header />
      <section className="feedback-bar">
        <FeedBackForm onAddForm={addFormHandler} />

        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} onDelete={feedbackDeleteHandler} />
      </section>
    </main>
  );
}

export default App;
