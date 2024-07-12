const express = require("express");
const router = express.Router();

// Define routes for your Web Application projects
router.get("/", (req, res) => {
  res.send("List of Web Application projects");
});

router.post("/", (req, res) => {
  res.send("Add a new Web Application project");
});

router.get("/:id", (req, res) => {
  res.send("Details of Web Application project with id " + req.params.id);
});

router.put("/:id", (req, res) => {
  res.send("Update Web Application project with id " + req.params.id);
});

router.delete("/:id", (req, res) => {
  res.send("Delete Web Application project with id " + req.params.id);
});

// Export the router
module.exports = router;
