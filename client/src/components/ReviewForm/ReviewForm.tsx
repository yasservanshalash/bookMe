import React, { useEffect, useState } from 'react';
import FiveStarRating from '../FiveStarRating/FiveStarRating';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { AppDispatch, RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { Place, Review } from '../../types/types';
import { addReview, fetchAllReviews, fetchReviewsByPlaceId } from '../../redux/thunk/reviewsThunk';


const ReviewForm = ({place} : {place: Place}) => {
  const [rating, setRating] = useState<number>(0);
  const [reviewText, setReviewText] = useState<string>('');
  const [reviews, setReviews] = useState<Review[]>([]);

  const reviewsDB = useSelector((state: RootState) => state.reviews.reviews)
  const user = useSelector((state: RootState) => state.users.user);
  const dispatchThunk = useDispatch<AppDispatch>();

  useEffect(() => {
    console.log(place._id)
    // dispatchThunk(fetchReviewsByPlaceId(place._id as string))
    dispatchThunk(fetchAllReviews())
    setReviews(reviewsDB)
    console.log(reviewsDB, "reviews")

  }, [dispatchThunk, reviews])
  console.log(reviewsDB, "reviews")
  const handleRatingChange = (newValue: number) => {
    setRating(newValue);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReviewText(e.target.value);
  };

  const handleSubmit = () => {
    setReviews([...reviews, { rating: rating, review: reviewText }]);
    console.log(user._id, place._id, rating, reviewText)
    dispatchThunk(addReview(user._id, place._id as string, rating, reviewText))



    dispatchThunk(fetchReviewsByPlaceId(place._id as string))
    dispatchThunk(fetchAllReviews())

    setReviews(reviewsDB);

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
      <Box sx={{display: "flex", flexDirection: "column-reverse" }}>
        {reviewsDB.filter((review: Review) => review.place === place._id).map((review: Review) => (
          <Box key={crypto.randomUUID()} >
            <FiveStarRating value={+review.rating} readOnly />
            <p>{review.review}</p>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReviewForm;
