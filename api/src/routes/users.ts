// User router here
import { Router } from "Express";
import {
  createUserController,
  loginWithPasswordController,
  displayUserInformationController,
  updateUserByIdController,
  displayAllInformationController,
  deleteUserByIdController,
} from "../controllers/users";
import passport from "passport";
const router = Router();
router.post("/", createUserController);
router.post("/login", loginWithPasswordController);
router.put(
  "/:userId",
  //passport.authenticate("jwt", { session: false }),
  updateUserByIdController
);
router.get("/:userId", displayUserInformationController);
router.get("/", displayAllInformationController);
router.delete(
  "/:userId",
  //passport.authenticate("jwt", { session: false }),
  deleteUserByIdController
);
export default router;
