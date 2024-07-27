import express from "express";
import {
  addToPlaylist,
  changePassword,
  forgetPassword,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);

router.route("/profile").get(isAuthenticated, getMyProfile);
router.route("/changepassword").put(isAuthenticated, changePassword);

router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword/:token").put(resetPassword);
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);
router.route("/removefromplaylist").delete(isAuthenticated, removeFromPlaylist);

export default router;
