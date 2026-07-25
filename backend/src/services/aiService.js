const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");

const analyzeResearchPapers = async (files) => {
  try {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append(
        "papers",
        fs.createReadStream(file.path)
      );
    });

    const response = await axios.post(
      "http://127.0.0.1:8000/analyze",
      formData,
      {
        headers: formData.getHeaders(),
        maxBodyLength: Infinity,
        maxContentLength: Infinity,
      }
    );

    return response.data;

  } catch (error) {

    console.error(
      "AI Error:",
      error.response?.data || error.message
    );

    throw new Error(
      "Failed to communicate with AI Service."
    );


  }
};

module.exports = {
  analyzeResearchPapers,
};