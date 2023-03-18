import { Router } from "Express";
import {
  createReservationController,
  getReservationByUserIdController,
  deleteReservationByIdController,
} from "../controllers/reservation";
import passport from "passport";

 const router = Router();

router.post(
  "/:userId",
  //passport.authenticate("jwt", { session: false }),
  createReservationController
);
router.get(
  "/:userId",
  //passport.authenticate("jwt", { session: false }),
  getReservationByUserIdController
);
router.delete(
  "/:id",
  // passport.authenticate("jwt", { session: false }),
  deleteReservationByIdController
);

export default router;

  