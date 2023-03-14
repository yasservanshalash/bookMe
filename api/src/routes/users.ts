// User router here
import { Router } from "Express";
import {
  createUserController,
  loginWithPasswordController,
  displayUserInformationController,
  updateUserByIdController,
} from "../controllers/users";
import passport from "passport";
const router = Router();
router.post("", createUserController);
router.post("/login", loginWithPasswordController);
router.put("/:userId", updateUserByIdController);
router.get("/info", displayUserInformationController);

export default router;
