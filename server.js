// DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const PORT = process.env.PORT || 3070 ;

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
