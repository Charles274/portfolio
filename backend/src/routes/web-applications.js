const express = require("express");
const router = express.Router();

const {
  getWebAppProjectItems,
  getWebAppProjectItemById,
  createWebAppProjectItem,
  updateWebAppProjectItem,
  deleteWebAppProjectItem,
} = require("../controllers/web-applications");

// Define routes for your web applications projects
router.get("/", getWebAppProjectItems);
router.post("/", createWebAppProjectItem);
router.get("/:id", getWebAppProjectItemById);
router.put("/:id", updateWebAppProjectItem);
router.delete("/:id", deleteWebAppProjectItem);

module.exports = router;
