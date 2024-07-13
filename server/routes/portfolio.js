const express = require("express");
const router = express.Router();

// Define routes for your civil engineering projects
router.get("/", (req, res) => {
  res.send("List of Portfolio projects");
});

// Export the router
module.exports = router;
