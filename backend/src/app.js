const express = require("express");
const cors = require("cors");
const path = require("path");

const healthRoutes = require("./routes/healthRoutes");
const analysisRoutes = require("./routes/analysisRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Routes
app.use("/api/health", healthRoutes);
app.use("/api/analysis", analysisRoutes);

module.exports = app;