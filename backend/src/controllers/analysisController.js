const { analyzeResearchPapers } = require("../services/aiService");

const analyzePapers = async (req, res) => {
  try {
    const uploadedFiles = req.files;

    if (!uploadedFiles || uploadedFiles.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No PDF files uploaded."
      });
    }

    const result = await analyzeResearchPapers(uploadedFiles);

    return res.status(200).json(result);

  } catch (error) {
    console.error("=== BACKEND ERROR ===");
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  analyzePapers,
};