// DEPENDENCIES
const express = require("express");
const Products = require("../models/products");

// ROUTER
const router = express.Router();

// INDEX
router.get("/", async (req, res) => {
  try {
    res.json(await Products.find({}));
  } catch (err) {
    res.status(400).json(err);
  }
});

// SHOW
router.get("/:id", async (req, res) => {
  try {
    res.json(await Products.findById(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

// EXPORTS
module.exports = router;
