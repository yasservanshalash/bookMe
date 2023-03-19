import React, { useState } from 'react';
import { Rating } from '@mui/material';

interface FiveStarRatingProps {
  value: number;
  readOnly?: boolean;
  onChange?: (newValue: number) => void;
}

const FiveStarRating: React.FC<FiveStarRatingProps> = ({
  value,
  readOnly = false,
  onChange,
}) => {
  const [ratingValue, setRatingValue] = useState(value);

  const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
    if (newValue !== null) {
      setRatingValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  return (
    <Rating
      name="five-star-rating"
      value={ratingValue}
      precision={0.5}
      onChange={readOnly ? undefined : handleRatingChange}
      readOnly={readOnly}
    />
  );
};

export default FiveStarRating;
