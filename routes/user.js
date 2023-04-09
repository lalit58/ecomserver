import express from "express";
import {
  forgetpassword,
  getMyProfile,
  login,
  logout,
  resetpassword,
  signup,
  updatePassword,
  updatePic,
  updateProfile,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/login", login);
router.post("/new", singleUpload, signup);
router.get("/me", isAuthenticated, getMyProfile);
router.get("/logout", isAuthenticated, logout);

// Updating Routes
router.put("/updateprofile", isAuthenticated, updateProfile);
router.put("/changepassword", isAuthenticated, updatePassword);
router.put("/updatepic", isAuthenticated, singleUpload, updatePic);

// Forget Password & Reset Password
router.route("/forgetpassword").post(forgetpassword).put(resetpassword);

export default router;
