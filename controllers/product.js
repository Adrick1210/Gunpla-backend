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

// CREATE
router.post("/", async (req, res) => {
  try {
    res.json(await Products.create(req.body));
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    res.json(await Products.findByIdAndDelete(req.params.id));
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE
router.put("/:id", async (req,res) => {
    try {
        res.json(await Products.findByIdAndUpdate(req.params.id, req.body))
    } catch (err) {
        res.status(400).json(err);
      }
})

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
