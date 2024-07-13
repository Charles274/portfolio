const express = require("express");
const router = express.Router();

// Define routes for your projects
router.get("/", (req, res) => {
  res.send("List of projects");
});

router.post("/", (req, res) => {
  res.send("Add a new project");
});

router.get("/:id", (req, res) => {
  res.send("Details of project with id " + req.params.id);
});

router.put("/:id", (req, res) => {
  res.send("Update project with id " + req.params.id);
});

router.delete("/:id", (req, res) => {
  res.send("Delete project with id " + req.params.id);
});

module.exports = router;
