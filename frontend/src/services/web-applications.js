const WebAppProjectItem = require("../models/web-applications");

// Get all web app projects
const getWebAppProjectItems = async (req, res) => {
  try {
    const items = await WebAppProjectItem.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a web app project by ID
const getWebAppProjectItemById = async (req, res) => {
  try {
    const item = await WebAppProjectItem.findById(req.params.id);
    if (item) {
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new web app project
const createWebAppProjectItem = async (req, res) => {
  const newItem = new WebAppProjectItem(req.body);

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing web app project
const updateWebAppProjectItem = async (req, res) => {
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
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a web app project
const deleteWebAppProjectItem = async (req, res) => {
  try {
    const deletedItem = await WebAppProjectItem.findByIdAndDelete(
      req.params.id
    );
    if (deletedItem) {
      res.status(200).json({ message: "Item deleted successfully" });
    } else {
      res.status(404).json({ message: "Item not found" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Export all functions
module.exports = {
  getWebAppProjectItems,
  getWebAppProjectItemById,
  createWebAppProjectItem,
  updateWebAppProjectItem,
  deleteWebAppProjectItem,
};
