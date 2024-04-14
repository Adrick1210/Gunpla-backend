// DEPENDENCIES
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3075; 

// APP
const app = express();

// MIDDLEWARE
app.use(morgan("dev"));

//TEST ROUTE
app.get("/", (req, res) => {
  res.send("This server works");
});

// LISTENER
app.listen(PORT, () => {
  console.log(`Products showing ${PORT}`);
});
