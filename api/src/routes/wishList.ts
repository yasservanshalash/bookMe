// User router here
import { Router } from "Express";
import {
  createWishListController,
  getWishListByUserId,
  deleteWishList,
} from "../controllers/wishList";

const router = Router();
router.post("/", createWishListController);
router.get("/:userId", getWishListByUserId);
router.delete("/", deleteWishList);
export default router;
