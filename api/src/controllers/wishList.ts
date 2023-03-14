import { Request, Response } from "Express";
import WishList from "../models/WishList";
import { WishListDocument } from "../models/WishList";
import wishListService from "../services/wishList";
export const createWishListController = async (req: Request, res: Response) => {
  try {
    const { userId, placeId } = req.body;

    const newList = new WishList({
      userId: userId,
      places: [placeId],
    });

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
    if (!wishList) {
      res.json({ message: `No wish list with id ${req.params.userId}` });
      return;
    }
    res.json(wishList);
  } catch (error) {
    console.log(error);
  }
};
