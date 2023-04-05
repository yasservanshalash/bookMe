// User router here
import { Router } from "express";
import {
  createUserController,
  loginWithPasswordController,
  displayUserInformationController,
  updateUserByIdController,
  displayAllInformationController,
  deleteUserByIdController,
} from "../controllers/users";
import passport from "passport";

import { googleAuthenticate } from "../controllers/users";


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


router.post(
  "/login-google",
  passport.authenticate("google-id-token", { session: false }),
  googleAuthenticate
);


export default router;
