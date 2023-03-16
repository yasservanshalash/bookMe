import Review from "../models/Review";
import { ReviewDocument } from "../models/Review";
const createReview = async (
  review: ReviewDocument
): Promise<ReviewDocument> => {
  return review.save();
};

const getAllReview = async (): Promise<ReviewDocument[]> => {
  return Review.find();
};
//get complete review for one place
const getReviewForEachPlace = async (
  placeId: String
): Promise<ReviewDocument[]> => {
  return Review.find({ place: placeId });
};
export default {
  createReview,
  getAllReview,
  getReviewForEachPlace,
};
