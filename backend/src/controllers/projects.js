const ProjectItem = require("../models/web-applications");

// Get all web app projects
const getProjectItems = async (req, res) => {
  try {
    const items = await ProjectItem.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a web app project by ID
const getProjectItemById = async (req, res) => {
  try {
    const item = await ProjectItem.findById(req.params.id);
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
const createProjectItem = async (req, res) => {
  const newItem = new ProjectItem(req.body);

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing web app project
const updateProjectItem = async (req, res) => {
  try {
    const updatedItem = await ProjectItem.findByIdAndUpdate(
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
const deleteProjectItem = async (req, res) => {
  try {
    const deletedItem = await ProjectItem.findByIdAndDelete(req.params.id);
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
  getProjectItems,
  getProjectItemById,
  createProjectItem,
  updateProjectItem,
  deleteProjectItem,
};
