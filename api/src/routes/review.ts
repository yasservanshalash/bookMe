import { Router } from "Express";
import {
  createReviewController,
  getReviewController,
  getReviewForSinglePlace,
} from "../controllers/review";

const router = Router();
router.post("/", createReviewController);
router.get("/", getReviewController);
router.get("/:placeId", getReviewForSinglePlace);
export default router;
