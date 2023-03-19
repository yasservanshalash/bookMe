import { reviewAction } from './../slices/reviewSlice';
import { Place } from './../../types/types';
// import axios from "axios";
import { Review } from "../../types/types";
// import { placeActions } from './../slices/placesSlice';
import { AppDispatch } from "../store";
import axios from "axios";

const url = "http://localhost:8013/review/"

export function fetchReviewsByPlaceId(placeId: string) {
    return async (dispatch: AppDispatch) => {
        const response = await  axios.get(url + placeId )
        dispatch(reviewAction.setReviews(response.data.reviews))
    }
}


export function fetchAllReviews() {
    return async (dispatch: AppDispatch) => {
        const response = await  axios.get(url)
        dispatch(reviewAction.setReviews(response.data))
    }
}

export function addReview(userId: string, placeId: string, rating: number, reviewText: string) {
    return async (dispatch: AppDispatch) => {
        const result = await axios.post(url, {userId: userId, place: placeId,rating: rating, review: reviewText})
        return result;
    }
}