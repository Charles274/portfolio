import { Request, Response } from "express";
import WebAppProjectItem from "../models/web-applications";

const getWebAppProjectItems = async (req: Request, res: Response) => {
  try {
    const items = await WebAppProjectItem.find();
    res.status(200).json(items);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const getWebAppProjectItemById = async (req: Request, res: Response) => {
  try {
    const item = await WebAppProjectItem.findById(req.params.id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const createWebAppProjectItem = async (req: Request, res: Response) => {
  const newItem = new WebAppProjectItem(req.body);

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

const updateWebAppProjectItem = async (req: Request, res: Response) => {
  try {
    const updatedItem = await WebAppProjectItem.findByIdAndUpdate(
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

const deleteWebAppProjectItem = async (req: Request, res: Response) => {
  try {
    const deletedItem = await WebAppProjectItem.findByIdAndDelete(
      req.params.id
    );
    if (deletedItem) {
      res.status(200).json({ message: "Item deleted successfully" });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export {
  getWebAppProjectItems,
  getWebAppProjectItemById,
  createWebAppProjectItem,
  updateWebAppProjectItem,
  deleteWebAppProjectItem,
};
