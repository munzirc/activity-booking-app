import express from "express";
import { authenticateUser } from "../middleware/authenticate.js";
import activityController from "../controller/activity.controller.js";
import { validateActivity } from "../middleware/validate.js";

const router = express.Router();

router.post(
  "",
  authenticateUser,
  validateActivity,
  activityController.addActivity
);
router.get("", activityController.getAllActivites);

export default router;
