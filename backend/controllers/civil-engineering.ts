import { Request, Response } from "express";
import CivilProjectItem from "../models/civil-engineering.model";

// Get all projects
const getCivilProjectItems = async (req: Request, res: Response) => {
  try {
    const items = await CivilProjectItem.find();
    res.status(200).json(items);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Get a project by ID
const getCivilProjectItemById = async (req: Request, res: Response) => {
  try {
    const item = await CivilProjectItem.findById(req.params.id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new project
const createCivilProjectItem = async (req: Request, res: Response) => {
  const newItem = new CivilProjectItem(req.body);

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing project
const updateCivilProjectItem = async (req: Request, res: Response) => {
  try {
    const updatedItem = await CivilProjectItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedItem) {
      res.status(200).json(updatedItem);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a project
const deleteCivilProjectItem = async (req: Request, res: Response) => {
  try {
    const deletedItem = await CivilProjectItem.findByIdAndDelete(req.params.id);
    if (deletedItem) {
      res.status(200).json({ message: "Item deleted successfully" });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

// Export all functions
export {
  getCivilProjectItems,
  getCivilProjectItemById,
  createCivilProjectItem,
  updateCivilProjectItem,
  deleteCivilProjectItem,
};
