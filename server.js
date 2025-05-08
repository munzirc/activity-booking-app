import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.route.js";
import activityRoutes from "./routes/activity.route.js";
import bookingRoutes from "./routes/booking.route.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/booking", bookingRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Activity Booking App is running..." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
