// User router here
import { Router } from "Express";
import {
  createWishListController,
  getWishListByUserId,
} from "../controllers/wishList";

const router = Router();
router.post("", createWishListController);
router.get("/:userId", getWishListByUserId);
export default router;
