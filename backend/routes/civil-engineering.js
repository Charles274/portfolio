const express = require("express");
const router = express.Router();

// Define routes for your civil engineering projects
router.get("/", (req, res) => {
  res.send("List of civil engineering projects");
});

router.post("/", (req, res) => {
  res.send("Add a new civil engineering project");
});

router.get("/:id", (req, res) => {
  res.send("Details of civil engineering project with id " + req.params.id);
});

router.put("/:id", (req, res) => {
  res.send("Update civil engineering project with id " + req.params.id);
});

router.delete("/:id", (req, res) => {
  res.send("Delete civil engineering project with id " + req.params.id);
});

// Export the router
module.exports = router;
