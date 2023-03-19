import React, { useState } from 'react';
import FiveStarRating from '../FiveStarRating/FiveStarRating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface Review {
  rating: number;
  text: string;
}

const ReviewForm = () => {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [reviews, setReviews] = useState<Review[]>([]);

  const handleRatingChange = (newValue: number) => {
    setRating(newValue);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewText(e.target.value);
  };

  const handleSubmit = () => {
    setReviews([...reviews, { rating, text: reviewText }]);
    setRating(0);
    setReviewText('');
  };

  return (
    <Box>
      <h3>Submit a review:</h3>
      <FiveStarRating value={rating} onChange={handleRatingChange} />
      <TextField
        label="Review text"
        multiline
        rows={4}
        value={reviewText}
        onChange={handleTextChange}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button onClick={handleSubmit} variant="contained">
        Submit
      </Button>
      <h3>Reviews:</h3>
      <Box>
        {reviews.map((review, index) => (
          <Box key={index}>
            <FiveStarRating value={review.rating} readOnly />
            <p>{review.text}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewForm;
