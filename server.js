// DEPENDENCIES
const express = require("express");
const middleware = require("./utils/middleware");
const routers = require("./utils/routers");

// APP
const app = express();

// MIDDLEWARE
middleware(app);
routers(app);

//TEST ROUTE
app.get("/", (req, res) => {
  res.send("This server works");
});

// LISTENER
const PORT = process.env.PORT || 3075;
app.listen(PORT, () => {
  console.log(`Products showing ${PORT}`);
});
