import Activity from "../model/activity.model.js";

const addActivity = async (req, res) => {
  try {
    const { title, description, location, date, time } = req.body;

    const activity = await Activity.create({
      title,
      description,
      location,
      date,
      time,
    });

    res.status(201).json({ message: "Activity added successfully", activity });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server error" });
  }
};

const getAllActivites = async (req, res) => {
  try {
    const activities = await Activity.find();

    if (activities.length === 0) {
      return res.status(404).json({ message: "No activities found" });
    }

    res.json(activities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export default {
  addActivity,
  getAllActivites,
};
