require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import Routes
const authRoutes = require("./routes/authRoutes");

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("MONGO_URI is not set. Ensure .env is configured correctly.");
  process.exit(1);
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });

// API Routes
app.use("/api/auth", authRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
