const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const levelRoutes = require("./routes/levelRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTE CONNECTION
app.use("/api/levels", levelRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected 🔥"))
.catch(err => console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});