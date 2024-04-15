// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PORT = process.env.PORT || 3075;

// MIDDLEWARE
function middleware(app) {
  app.use(morgan("dev"));
  app.use(cors());
  app.use(express.json());
}

// EXPORTS
module.exports = middleware;
