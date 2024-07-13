import mongoose, { Schema } from "mongoose";
import {
  PortfolioItem,
  CategoryName,
  ProjectStatus,
} from "../../../frontend/src/models/portfolio";

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

const CivilProjectItemSchema = new Schema(
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

const CivilProjectItem = mongoose.model("CivilProject", CivilProjectItemSchema);

export default CivilProjectItem;
