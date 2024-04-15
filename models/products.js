// DEPENDENCIES
const mongoose = require("mongoose");

// DEFINE
const { Schema, model } = mongoose;

// SCHEMA
const productSchema = new Schema({
    brand: String,
    name: String,
    boxArt: String,
    price: Number,
    inventory: Number,
    description: String,
    grade: String,
    scale: String,
    releaseDate: String,
})

// MODEL
const Product = model("product", productSchema);

// EXPORT
module.exports = Product;
