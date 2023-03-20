import { Request, Response } from "Express";
import Review from "../models/Review";
import ReviewService from "../services/reviews";
export const createReviewController = async (req: Request, res: Response) => {
  try {
    const { userId, place, review, rating } = req.body;

    const newReview = new Review({
      userId: userId,
      place: place,
      review: review,
      rating: rating,
    });

    const user = await ReviewService.createReview(newReview);
    res.json({ status: "success", message: `Review successful.` });
  } catch (error) {
    console.log(error);
  }
};

export const getReviewController = async (req: Request, res: Response) => {
  try {
    const reviews = await ReviewService.getAllReview();
    if (!reviews) {
      res.json({ message: "No review" });
      return;
    }
    res.json(reviews);
  } catch (error) {
    console.log(error);
  }
};

//get review for each places

export const getReviewForSinglePlace = async (req: Request, res: Response) => {
  try {
    const reviews = await ReviewService.getReviewForEachPlace(
      req.params.placeId
    );
    console.log("pid", req.params.placeId, "rev", reviews);
    if (!reviews) {
      res.json({ message: "No review" });
      return;
    }

    let calculateRating = 0;
    reviews.map((item) => (calculateRating = item.rating + calculateRating));

    calculateRating /= reviews.length;
    console.log(
      "review length is",
      reviews.length,
      "calculate rating",
      calculateRating
    );

    let finalRating = 1;
    if (calculateRating < 1.5) finalRating = 1;
    else if (calculateRating < 2.5) finalRating = 2;
    else if (calculateRating < 3.5) finalRating = 3;
    else if (calculateRating < 4.5) finalRating = 4;
    else if (calculateRating <= 5) finalRating = 5;
    else finalRating = 1;
    console.log("finalRating is", finalRating);

    res.json({ reviews: [...reviews], finalRating: `${finalRating}` });
  } catch (error) {
    console.log(error);
  }
};
