import WishList from "../models/WishList";
import { WishListDocument } from "../models/WishList";

const addToWishList = async (
  wishList: WishListDocument
): Promise<WishListDocument> => {
  console.log(" iam inside wishlist is");
  console.log("wishlist is", wishList);
  return wishList.save();
};

const removeFromWishList = async (
  userId: string,
  placeId: string
): Promise<WishListDocument | null> => {
  return WishList.findOneAndDelete({ userId: userId, places: placeId });
};

const getAllWishListByUserId = async (
  userIdRequest: string
): Promise<WishListDocument[]> => {
  return WishList.find({ userId: userIdRequest })
    .populate({
      path: "places",
      options: { strictPopulate: false },
    })
    .populate({ path: "userId" });
};
const checkWishListAlreadyExistByUserId = async (
  userId: string,
  placeId: string
): Promise<WishListDocument[] | null> => {
  const result = WishList.find({ userId: userId, places: placeId });
  return result;
};

const updateWishList  = async (id: string, newData: Partial<WishListDocument>): Promise<WishListDocument |null> => {
  return WishList.findByIdAndUpdate(id, newData, { new: true});
}

export default {
  addToWishList,
  removeFromWishList,
  getAllWishListByUserId,
  checkWishListAlreadyExistByUserId,
  updateWishList
};
