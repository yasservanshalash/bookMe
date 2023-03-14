import WishList from "../models/WishList";
import { WishListDocument } from "../models/WishList";

const addToWishList = async (
  wishList: WishListDocument
): Promise<WishListDocument> => {
  return wishList.save();
};

const removeFromWishList = async (
  PlaceId: String
): Promise<WishListDocument | null> => {
  return WishList.findByIdAndRemove({ PlaceId: PlaceId });
};

const getAllWishListByUserId = async (
  userIdRequest: string
): Promise<WishListDocument[]> => {
  return WishList.find({ userId: userIdRequest }).populate("places");
};

export default { addToWishList, removeFromWishList, getAllWishListByUserId };
