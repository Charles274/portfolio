// backend/models/portfolioItem.ts

import mongoose, { Document, Schema } from "mongoose";
import {
  PortfolioItem,
  CategoryName,
  ProjectStatus,
} from "../../portfolio/src/models/portfolio.model";

// Define the schema for project description
const projectDescriptionSchema = new Schema({
  introduction: { type: String },
  key_responsibilities: [{ type: String }],
  conclusion: { type: String },
  collaboration: { type: String },
  key_features: [{ type: String }],
});

// Define the schema for category
const categorySchema = new Schema({
  name: { type: String, enum: Object.values(CategoryName) },
  iconClass: { type: String },
});

// Define the schema for portfolio items
const portfolioItemSchema = new Schema({
  //   id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: categorySchema },
  location: { type: String },
  brief: { type: String },
  consultant: { type: String },
  description: { type: projectDescriptionSchema },
  contractor: { type: String },
  position: { type: String },
  images: [{ type: String }],
  tags: [{ type: String }],
  projectUrl: { type: String },
  projectStartDate: { type: Date, required: true },
  projectEndDate: { type: Date, required: true },
  client: { type: String },
  status: { type: String, enum: Object.values(ProjectStatus) },
});

// Create the Mongoose model
const PortfolioProjectItem =
  (mongoose.model < PortfolioItem) &
  (Document > ("PortfolioItem", portfolioItemSchema));

export default PortfolioProjectItem;
