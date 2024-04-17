// DEPENDENCIES
const express = require("express");
const Products = require("../models/products");

// ROUTER
const router = express.Router();

// INDEX
router.get("/", async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  try {
    
      const products = await Products.find({})
        .limit(limit * 1)
        .skip((page - 1) * limit);

      const count = await Products.countDocuments();

    res.json({
      products,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
    })

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
