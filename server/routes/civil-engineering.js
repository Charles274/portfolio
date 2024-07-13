const express = require("express");
const router = express.Router();
const {
  getCivilProjectItems,
  getCivilProjectItemById,
  createCivilProjectItem,
  updateCivilProjectItem,
  deleteCivilProjectItem,
} = require("../controllers/civil-engineering");

// Define routes for your civil engineering projects
router.get("/", getCivilProjectItems);
router.post("/", createCivilProjectItem);
router.get("/:id", getCivilProjectItemById);
router.put("/:id", updateCivilProjectItem);
router.delete("/:id", deleteCivilProjectItem);

// Export the router
module.exports = router;
