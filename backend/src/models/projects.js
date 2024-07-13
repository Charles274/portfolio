const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectDescriptionSchema = new Schema({
  introduction: { type: String },
  key_responsibilities: [{ type: String }],
  conclusion: { type: String },
  collaboration: { type: String },
  key_features: [{ type: String }],
});

const categorySchema = new Schema({
  name: {
    type: String,
    enum: ["CategoryName1", "CategoryName2", "CategoryName3"],
  }, // Replace with actual enum values
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
    status: { type: String, enum: ["Status1", "Status2", "Status3"] }, // Replace with actual enum values
  },
  { timestamps: true }
);

const PortfolioProjectItem = mongoose.model(
  "PortfolioItem",
  portfolioItemSchema
);

module.exports = PortfolioProjectItem;
