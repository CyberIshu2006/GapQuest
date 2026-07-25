const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GapQuest Backend is running",
    version: "1.0.0"
  });
});

module.exports = router;