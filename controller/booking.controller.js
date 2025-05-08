import Activity from "../model/activity.model.js";
import Booking from "../model/booking.model.js";

const bookActivity = async (req, res) => {
  try {
    const { id } = req.params;

    const activity = await Activity.findById(id);
    if (!activity) {
      return res.status(404).json({ message: "Activity not found" });
    }

    const existingBooking = await Booking.findOne({
      user: req.user.userId,
      activity: id,
    });
    if (existingBooking) {
      return res.status(400).json({ message: "Activity already booked" });
    }

    const booking = new Booking({
      user: req.user.userId,
      activity: id,
    });

    await booking.save();

    res.status(201).json({ message: "Activity booked successfully", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.userId })
      .populate("activity", "-_id -__v -createdAt -updatedAt")
      .select("-__v -user -createdAt -updatedAt").lean();

    if (bookings.length === 0) {
      return res.status(404).json({ message: "No bookings found" });
    }

    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export default {
  bookActivity,
  getMyBookings,
};
