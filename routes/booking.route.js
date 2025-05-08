import express from "express";
import { authenticateUser } from "../middleware/authenticate.js";
import bookingController from "../controller/booking.controller.js";

const router = express.Router();

router.post("/:id", authenticateUser, bookingController.bookActivity);
router.get("", authenticateUser, bookingController.getMyBookings);

export default router;
