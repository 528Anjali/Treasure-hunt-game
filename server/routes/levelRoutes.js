const express = require("express");
const router = express.Router();

const Level = require("../models/Level");

// GET level by number
router.get("/:level", async (req, res) => {
  try {
    const level = await Level.findOne({
      levelNumber: Number(req.params.level)
    });
     
    if (!level) {
      return res.status(404).json({ message: "Level not found" });
    }

    res.json(level);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;