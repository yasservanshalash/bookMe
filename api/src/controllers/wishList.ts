import { Request, Response } from "Express";
import WishList from "../models/WishList";
import { WishListDocument } from "../models/WishList";
import wishList from "../services/wishList";
import wishListService from "../services/wishList";
export const createWishListController = async (req: Request, res: Response) => {
  console.log("hello controller");
  try {
    const { userId, places } = req.body;

    const checkExist: WishListDocument[] | null =
      await wishListService.checkWishListAlreadyExistByUserId(
        userId,
        places.toString()
      );
    // console.log("userid", req.body);
    const newList = new WishList({
      userId: userId,
      places: places.toString(),
    });
    console.log("check", checkExist);
    if (checkExist?.length) {
      res.json({
        status: "failed",
        message: `You have choose this place already.`,
      });
      return;
    }
    const createList = await wishListService.addToWishList(newList);
    if (createList) {
      res.json({
        status: "success",
        message: `wish list created successfully.`,
      });
      return;
    }

    res.json({ message: `Can not create wish list.` });
  } catch (error) {
    console.log(error);
  }
};

export const getWishListByUserId = async (req: Request, res: Response) => {
  try {
    const wishList = await wishListService.getAllWishListByUserId(
      req.params.userId
    );
    console.log("wishlist", req.params.userId);
    if (!wishList) {
      res.json({ message: `No wish list with id ${req.params.userId}` });
      return;
    }
    res.json(wishList);
  } catch (error) {
    console.log(error);
  }
};

export const deleteWishList = async (req: Request, res: Response) => {
  console.log("call me");
  const { userId, placeId } = req.body;
  try {
    console.log("two values", userId, placeId.toString());
    const wishListRemove = await wishListService.removeFromWishList(
      userId,
      placeId.toString()
    );
    console.log("Wish remove is", wishListRemove);
    if (!wishListRemove) {
      res.json({ message: `No wish list with id ${req.params.userId}` });
      return;
    }
    res.json(wishListRemove);
  } catch (error) {
    console.log(error);
  }
};
