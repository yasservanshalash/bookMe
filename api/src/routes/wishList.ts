import { Router } from "Express";
import {
  createWishListController,
  getWishListByUserId,
  deleteWishList,
  updateFavoritesController
} from "../controllers/wishList";

const router = Router();
router.post("/", createWishListController);
router.get("/:userId", getWishListByUserId);
router.delete("/", deleteWishList);
router.put("/:userId", updateFavoritesController)
export default router;
