const mongoose = require("mongoose");

// Connect to MongoDB
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected successfully!"))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
