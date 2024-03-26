import React, { useState } from "react";
import axios from "axios";
import '../WriteReview.css';

function WriteReview() {
  const [formData, setFormData] = useState({
    name: "",
    rating: 1,
    review: "",
  });

  const inputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const postReview = async (e) => {
    e.preventDefault();
    console.log("Post review called");
    try {
      const $axios = await axios.post("http://localhost:2999/WriteReview", formData);
      // Make a POST request to your backend API endpoint
      
      window.location.href = '/';
      console.log('Review submitted successfully:', $axios.data);
      // Handle success or update your component state as needed
    } catch (error) {
      console.error('Error submitting review:', error);  
    }
  };

  return (
    <div id="WriteReview">
      <h2>Write a Review</h2>
      <form onSubmit={postReview} action="/WriteReview" method="post">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={inputChange}
          required
        />

        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          min="1"
          max="5"
          value={formData.rating}
          onChange={inputChange}
          required
        />

        <label htmlFor="review">Review:</label>
        <textarea
          id="review"
          name="review"
          rows="4"
          cols="50"
          value={formData.review}
          onChange={inputChange}
          required
        ></textarea>

        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
}

export default WriteReview;