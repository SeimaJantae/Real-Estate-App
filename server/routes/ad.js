import express from "express";
import * as ad from "../controllers/ad.js";
import { requireSignIn } from "../middlewares/auth.js";

const router = express.Router();
router.post("/upload-image", requireSignIn, ad.uploadImage);
router.post("/remove-image", requireSignIn, ad.removeImage);
router.post("/ad", requireSignIn, ad.create);

export default router;
