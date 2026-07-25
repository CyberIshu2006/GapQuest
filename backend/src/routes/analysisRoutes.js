const express = require("express");
const { analyzePapers } = require("../controllers/analysisController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

// Health Check
router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Analysis API is working!"
  });
});

// Upload & Analyze PDFs
router.post(
  "/",
  upload.array("papers", 10),
  analyzePapers
);

module.exports = router;