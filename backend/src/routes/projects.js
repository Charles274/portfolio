const express = require("express");
const router = express.Router();

const {
  getProjectItems,
  getProjectItemById,
  createProjectItem,
  updateProjectItem,
  deleteProjectItem,
} = require("../controllers/projects");

// Define routes for your web applications projects
router.get("/", getProjectItems);
router.post("/", createProjectItem);
router.get("/:id", getProjectItemById);
router.put("/:id", updateProjectItem);
router.delete("/:id", deleteProjectItem);

module.exports = router;
