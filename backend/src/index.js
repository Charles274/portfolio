const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const civilEngineeringRoutes = require("./routes/civil-engineering");
const webApplicationsRoutes = require("./routes/web-applications");
const portfolioRoute = require("./routes/portfolio");
const projectsRoute = require("./routes/projects");

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app = express();

// Use the port specified in the .env file or default to 5000
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use Routes
app.use("api/projects/civil-engineering", civilEngineeringRoutes);
app.use("api/projects/web-applications", webApplicationsRoutes);
app.use("api/projects", projectsRoute);

// Connect to DB and start server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

startServer();
