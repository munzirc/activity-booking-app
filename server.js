import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import dotenv from 'dotenv'

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Activity Booking App is running..." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
