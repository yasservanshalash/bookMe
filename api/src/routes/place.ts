import { Router } from "Express";
import {
  updatePlaceController,
  getAllPlacesController,
  createPlaceController,
} from "../controllers/place";
import passport from "passport";
const router = Router();
router.post(
  "/",
  //passport.authenticate("jwt", { session: false }),
  createPlaceController
);
router.put(
  "/:placeId",
  //passport.authenticate("jwt", { session: false }),
  updatePlaceController
);
router.get("/", getAllPlacesController);

export default router;
