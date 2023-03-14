import { Router } from "Express";
import {
  updatePlaceController,
  getAllPlacesController,
  createPlaceController,
} from "../controllers/place";
const router = Router();
router.post("", createPlaceController);
router.put("/:placeId", updatePlaceController);
router.get("/places", getAllPlacesController);

export default router;
