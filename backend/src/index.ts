import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import civilEngineeringRoutes from "./routes/civil-engineering";
import webApplicationsRoutes from "./routes/web-applications";
import portfolioRoute from "./routes/portfolio";
// import projectsRoute from "./routes/projects";

// Load environment variables from .env file
dotenv.config();

// Initialize the Express application
const app: Application = express();

// Use the port specified in the .env file or default to 5000
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Use Routes
app.use("/projects/civil-engineering", civilEngineeringRoutes);
app.use("/projects/web-applications", webApplicationsRoutes);
// app.use("/projects", projectsRoute);
app.use("/", portfolioRoute);

// Connect to DB and start server
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {});
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

startServer();
