import mongoose, { Schema } from "mongoose";
import {
  PortfolioItem,
  CategoryName,
  ProjectStatus,
} from "../../portfolio/src/models/portfolio.model";

const projectDescriptionSchema = new Schema({
  introduction: { type: String },
  key_responsibilities: [{ type: String }],
  conclusion: { type: String },
  collaboration: { type: String },
  key_features: [{ type: String }],
});

const categorySchema = new Schema({
  name: { type: String, enum: Object.values(CategoryName) },
  iconClass: { type: String },
});

const portfolioItemSchema = new Schema(
  {
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
  },
  { timestamps: true }
);

const PortfolioProjectItem = mongoose.model<PortfolioItem>(
  "PortfolioItem",
  portfolioItemSchema
);

export default PortfolioProjectItem;
